<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KatakanaModel as Katakana;
use App\Models\HiraganaModel as Hiragana;

class CharactersController extends Controller
{
    public function __construct()
    {

    }

    public function getCharacters(Request $request)
    {
        $characters = [
            "hiragana" => [],
            "katakana" => []
        ];
        $type = $this->getType($request);
        $filter = false;

        if ($request->filter !== "") {
            $filter = $request->filter;
        }

        if ($request->hiragana === "true") {
            $hiragana = Hiragana::whereIn('type', $type)->when($filter, function ($query) use ($filter) {
                $query->where("pronunciation", "ilike", "%".$filter."%");
            })->get()->toArray();
            $characters["hiragana"] = $hiragana;
        }
        
        if ($request->katakana === "true") {
            $katakana = Katakana::whereIn('type', $type)->when($filter, function ($query) use ($filter) {
                $query->where("pronunciation", "ilike", "%".$filter."%");
            })->get()->toArray();
            $characters["katakana"] = $katakana;
        }

        return response()->json($characters);
    }

    public function getQuestions(Request $request)
    {
        $type = $this->getType($request);

        if ($request->hiragana === "true") {
            $hiragana = Hiragana::whereIn('type', $type)->get()->toArray();
            $questions = $this->generateQuestion($hiragana);
        }

        if ($request->katakana === "true") {
            $katakana = Katakana::whereIn('type', $type)->get()->toArray();
            $questions = $this->generateQuestion($katakana);
        }

        if ($request->all === "true") {
            $hiragana = Hiragana::whereIn('type', $type)->get()->toArray();
            $katakana = Katakana::whereIn('type', $type)->get()->toArray();
            $questions = $this->generateQuestion(array_merge($hiragana, $katakana));
        }

        shuffle($questions);
        return response()->json($questions);
    }

    protected function generateQuestion($dbResult)
    {
        $count = count($dbResult);
        $rand_keys = array_unique(array_rand($dbResult, 10));

        for ($a = 0; $a < 10; $a++) {
            $questions[$a]["character"] = $dbResult[$rand_keys[$a]]["character"];
            $exclude = [$rand_keys[$a]];
            $options = [];
            for ($b = 0; $b < 4; $b++) {
                $correctAnswer = $dbResult[$rand_keys[$a]]["pronunciation"];
                if ($b === 0) {
                    array_push($options, $correctAnswer);
                    $questions[$a]["options"][$b]["answer"] = $correctAnswer;
                    $questions[$a]["options"][$b]["id"] = $dbResult[$rand_keys[$a]]["id"];
                    $questions[$a]["options"][$b]["isCorrect"] = true;
                } else {
                    $number = "";
                    while (in_array(($number = mt_rand(0, $count - 1)), $exclude));
                    if (in_array($dbResult[$number]["pronunciation"], $options)) {
                        array_push($exclude, $number);
                        while (in_array(($number = mt_rand(0, $count - 1)), $exclude));
                    }
                    $questions[$a]["options"][$b]["answer"] = $dbResult[$number]["pronunciation"];
                    $questions[$a]["options"][$b]["id"] = $dbResult[$number]["id"];
                    $questions[$a]["options"][$b]["isCorrect"] = false;
                    array_push($exclude, $number);
                    array_push($options, $dbResult[$number]["pronunciation"]);
                }
            }

            shuffle($questions[$a]["options"]);
        }

        return $questions;
    }

    protected function getType($request)
    {
        $type = [];

        if ($request->single === "true") {
            array_push($type, "single");
        }

        if ($request->combo === "true") {
            array_push($type, "combo");
        }

        if ($request->dakuten === "true") {
            array_push($type, "dakuten");
        }

        return $type;
    }
}
