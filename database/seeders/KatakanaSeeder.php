<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KatakanaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('katakana')->insert([
            [
                'character' => 'ア',
                'pronunciation' => 'a',
                'type' => 'single'
            ],
            [
                'character' => 'カ',
                'pronunciation' => 'ka',
                'type' => 'single'
            ],
            [
                'character' => 'サ',
                'pronunciation' => 'sa',
                'type' => 'single'
            ],
            [
                'character' => 'タ',
                'pronunciation' => 'ta',
                'type' => 'single'
            ],
            [
                'character' => 'ナ',
                'pronunciation' => 'na',
                'type' => 'single'
            ],
            [
                'character' => 'イ',
                'pronunciation' => 'i',
                'type' => 'single'
            ],
            [
                'character' => 'キ',
                'pronunciation' => 'ki',
                'type' => 'single'
            ],
            [
                'character' => 'シ',
                'pronunciation' => 'shi',
                'type' => 'single'
            ],
            [
                'character' => 'チ',
                'pronunciation' => 'chi',
                'type' => 'single'
            ],
            [
                'character' => 'ニ',
                'pronunciation' => 'ni',
                'type' => 'single'
            ],
            [
                'character' => 'ウ',
                'pronunciation' => 'u',
                'type' => 'single'
            ],
            [
                'character' => 'ク',
                'pronunciation' => 'ku',
                'type' => 'single'
            ],
            [
                'character' => 'ス',
                'pronunciation' => 'su',
                'type' => 'single'
            ],
            [
                'character' => 'ツ',
                'pronunciation' => 'tsu',
                'type' => 'single'
            ],
            [
                'character' => 'ヌ',
                'pronunciation' => 'nu',
                'type' => 'single'
            ],
            [
                'character' => 'エ',
                'pronunciation' => 'e',
                'type' => 'single'
            ],
            [
                'character' => 'ケ',
                'pronunciation' => 'ke',
                'type' => 'single'
            ],
            [
                'character' => 'セ',
                'pronunciation' => 'se',
                'type' => 'single'
            ],
            [
                'character' => 'テ',
                'pronunciation' => 'te',
                'type' => 'single'
            ],
            [
                'character' => 'ネ',
                'pronunciation' => 'ne',
                'type' => 'single'
            ],
            [
                'character' => 'オ',
                'pronunciation' => 'o',
                'type' => 'single'
            ],
            [
                'character' => 'コ',
                'pronunciation' => 'ko',
                'type' => 'single'
            ],
            [
                'character' => 'ソ',
                'pronunciation' => 'so',
                'type' => 'single'
            ],
            [
                'character' => 'ト',
                'pronunciation' => 'to',
                'type' => 'single'
            ],
            [
                'character' => 'ノ',
                'pronunciation' => 'no',
                'type' => 'single'
            ],
            [
                'character' => 'ハ',
                'pronunciation' => 'ha',
                'type' => 'single'
            ],
            [
                'character' => 'マ',
                'pronunciation' => 'ma',
                'type' => 'single'
            ],
            [
                'character' => 'ヤ',
                'pronunciation' => 'ya',
                'type' => 'single'
            ],
            [
                'character' => 'ラ',
                'pronunciation' => 'ra',
                'type' => 'single'
            ],
            [
                'character' => 'ワ',
                'pronunciation' => 'wa',
                'type' => 'single'
            ],
            [
                'character' => 'ン',
                'pronunciation' => 'n',
                'type' => 'single'
            ],
            [
                'character' => 'ヒ',
                'pronunciation' => 'hi',
                'type' => 'single'
            ],
            [
                'character' => 'ミ',
                'pronunciation' => 'mi',
                'type' => 'single'
            ],
            [
                'character' => 'リ',
                'pronunciation' => 'ri',
                'type' => 'single'
            ],
            [
                'character' => 'フ',
                'pronunciation' => 'fu',
                'type' => 'single'
            ],
            [
                'character' => 'ム',
                'pronunciation' => 'mu',
                'type' => 'single'
            ],
            [
                'character' => 'ユ',
                'pronunciation' => 'yu',
                'type' => 'single'
            ],
            [
                'character' => 'ル',
                'pronunciation' => 'ru',
                'type' => 'single'
            ],
            [
                'character' => 'ヘ',
                'pronunciation' => 'he',
                'type' => 'single'
            ],
            [
                'character' => 'メ',
                'pronunciation' => 'me',
                'type' => 'single'
            ],
            [
                'character' => 'レ',
                'pronunciation' => 're',
                'type' => 'single'
            ],
            [
                'character' => 'ホ',
                'pronunciation' => 'ho',
                'type' => 'single'
            ],
            [
                'character' => 'モ',
                'pronunciation' => 'mo',
                'type' => 'single'
            ],
            [
                'character' => 'ヨ',
                'pronunciation' => 'yo',
                'type' => 'single'
            ],
            [
                'character' => 'ロ',
                'pronunciation' => 'ro',
                'type' => 'single'
            ],
            [
                'character' => 'ヲ',
                'pronunciation' => 'wo',
                'type' => 'single'
            ],
            [
                'character' => 'キャ',
                'pronunciation' => 'kya',
                'type' => 'combo'
            ],
            [
                'character' => 'シャ',
                'pronunciation' => 'sha',
                'type' => 'combo'
            ],
            [
                'character' => 'チャ',
                'pronunciation' => 'cha',
                'type' => 'combo'
            ],
            [
                'character' => 'ニャ',
                'pronunciation' => 'nya',
                'type' => 'combo'
            ],
            [
                'character' => 'キュ',
                'pronunciation' => 'kyu',
                'type' => 'combo'
            ],
            [
                'character' => 'シュ',
                'pronunciation' => 'shu',
                'type' => 'combo'
            ],
            [
                'character' => 'チュ',
                'pronunciation' => 'chu',
                'type' => 'combo'
            ],
            [
                'character' => 'ニュ',
                'pronunciation' => 'nyu',
                'type' => 'combo'
            ],
            [
                'character' => 'キョ',
                'pronunciation' => 'kyo',
                'type' => 'combo'
            ],
            [
                'character' => 'ショ',
                'pronunciation' => 'sho',
                'type' => 'combo'
            ],
            [
                'character' => 'チョ',
                'pronunciation' => 'cho',
                'type' => 'combo'
            ],
            [
                'character' => 'ニョ',
                'pronunciation' => 'nyo',
                'type' => 'combo'
            ],
            [
                'character' => 'ヒャ',
                'pronunciation' => 'hya',
                'type' => 'combo'
            ],
            [
                'character' => 'ミャ',
                'pronunciation' => 'mya',
                'type' => 'combo'
            ],
            [
                'character' => 'リャ',
                'pronunciation' => 'rya',
                'type' => 'combo'
            ],
            [
                'character' => 'ギャ',
                'pronunciation' => 'gya',
                'type' => 'combo'
            ],
            [
                'character' => 'ヒュ',
                'pronunciation' => 'hyu',
                'type' => 'combo'
            ],
            [
                'character' => 'ミュ',
                'pronunciation' => 'myu',
                'type' => 'combo'
            ],
            [
                'character' => 'リュ',
                'pronunciation' => 'ryu',
                'type' => 'combo'
            ],
            [
                'character' => 'ギュ',
                'pronunciation' => 'gyu',
                'type' => 'combo'
            ],
            [
                'character' => 'ヒョ',
                'pronunciation' => 'hyo',
                'type' => 'combo'
            ],
            [
                'character' => 'ミョ',
                'pronunciation' => 'myo',
                'type' => 'combo'
            ],
            [
                'character' => 'リョ',
                'pronunciation' => 'ryo',
                'type' => 'combo'
            ],
            [
                'character' => 'ギョ',
                'pronunciation' => 'gyo',
                'type' => 'combo'
            ],
            [
                'character' => 'ジャ',
                'pronunciation' => 'ja',
                'type' => 'combo'
            ],
            [
                'character' => 'ヂャ',
                'pronunciation' => 'ja',
                'type' => 'combo'
            ],
            [
                'character' => 'ビャ',
                'pronunciation' => 'bya',
                'type' => 'combo'
            ],
            [
                'character' => 'ピャ',
                'pronunciation' => 'pya',
                'type' => 'combo'
            ],
            [
                'character' => 'ジュ',
                'pronunciation' => 'ju',
                'type' => 'combo'
            ],
            [
                'character' => 'ヂュ',
                'pronunciation' => 'ju',
                'type' => 'combo'
            ],
            [
                'character' => 'ビュ',
                'pronunciation' => 'byu',
                'type' => 'combo'
            ],
            [
                'character' => 'ピュ',
                'pronunciation' => 'pyu',
                'type' => 'combo'
            ],
            [
                'character' => 'ジョ',
                'pronunciation' => 'jo',
                'type' => 'combo'
            ],
            [
                'character' => 'ヂョ',
                'pronunciation' => 'jo',
                'type' => 'combo'
            ],
            [
                'character' => 'ビョ',
                'pronunciation' => 'byo',
                'type' => 'combo'
            ],
            [
                'character' => 'ピョ',
                'pronunciation' => 'pyo',
                'type' => 'combo'
            ],
            [
                'character' => 'ガ',
                'pronunciation' => 'ga',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ザ',
                'pronunciation' => 'za',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ダ',
                'pronunciation' => 'da',
                'type' => 'dakuten'
            ],
            [
                'character' => 'バ',
                'pronunciation' => 'ba',
                'type' => 'dakuten'
            ],
            [
                'character' => 'パ',
                'pronunciation' => 'pa',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ギ',
                'pronunciation' => 'gi',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ジ',
                'pronunciation' => 'ji',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ヂ',
                'pronunciation' => 'ji',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ビ',
                'pronunciation' => 'bi',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ピ',
                'pronunciation' => 'pi',
                'type' => 'dakuten'
            ],
            [
                'character' => 'グ',
                'pronunciation' => 'gu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ズ',
                'pronunciation' => 'zu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ヅ',
                'pronunciation' => 'zu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ブ',
                'pronunciation' => 'bu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'プ',
                'pronunciation' => 'pu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ゲ',
                'pronunciation' => 'ge',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ゼ',
                'pronunciation' => 'ze',
                'type' => 'dakuten'
            ],
            [
                'character' => 'デ',
                'pronunciation' => 'de',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ベ',
                'pronunciation' => 'be',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ペ',
                'pronunciation' => 'pe',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ゴ',
                'pronunciation' => 'go',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ゾ',
                'pronunciation' => 'zo',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ド',
                'pronunciation' => 'do',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ボ',
                'pronunciation' => 'bo',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ポ',
                'pronunciation' => 'po',
                'type' => 'dakuten'
            ]
        ]);
    }
}
