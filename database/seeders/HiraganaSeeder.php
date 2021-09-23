<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HiraganaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hiragana')->insert([
            [
                'character' => 'あ',
                'pronunciation' => 'a',
                'type' => 'single'
            ],
            [
                'character' => 'か',
                'pronunciation' => 'ka',
                'type' => 'single'
            ],
            [
                'character' => 'さ',
                'pronunciation' => 'sa',
                'type' => 'single'
            ],
            [
                'character' => 'た',
                'pronunciation' => 'ta',
                'type' => 'single'
            ],
            [
                'character' => 'な',
                'pronunciation' => 'na',
                'type' => 'single'
            ],
            [
                'character' => 'い',
                'pronunciation' => 'i',
                'type' => 'single'
            ],
            [
                'character' => 'き',
                'pronunciation' => 'ki',
                'type' => 'single'
            ],
            [
                'character' => 'し',
                'pronunciation' => 'shi',
                'type' => 'single'
            ],
            [
                'character' => 'ち',
                'pronunciation' => 'chi',
                'type' => 'single'
            ],
            [
                'character' => 'に',
                'pronunciation' => 'ni',
                'type' => 'single'
            ],
            [
                'character' => 'う',
                'pronunciation' => 'u',
                'type' => 'single'
            ],
            [
                'character' => 'く',
                'pronunciation' => 'ku',
                'type' => 'single'
            ],
            [
                'character' => 'す',
                'pronunciation' => 'su',
                'type' => 'single'
            ],
            [
                'character' => 'つ',
                'pronunciation' => 'tsu',
                'type' => 'single'
            ],
            [
                'character' => 'ぬ',
                'pronunciation' => 'nu',
                'type' => 'single'
            ],
            [
                'character' => 'え',
                'pronunciation' => 'e',
                'type' => 'single'
            ],
            [
                'character' => 'け',
                'pronunciation' => 'ke',
                'type' => 'single'
            ],
            [
                'character' => 'せ',
                'pronunciation' => 'se',
                'type' => 'single'
            ],
            [
                'character' => 'て',
                'pronunciation' => 'te',
                'type' => 'single'
            ],
            [
                'character' => 'ね',
                'pronunciation' => 'ne',
                'type' => 'single'
            ],
            [
                'character' => 'お',
                'pronunciation' => 'o',
                'type' => 'single'
            ],
            [
                'character' => 'こ',
                'pronunciation' => 'ko',
                'type' => 'single'
            ],
            [
                'character' => 'そ',
                'pronunciation' => 'so',
                'type' => 'single'
            ],
            [
                'character' => 'と',
                'pronunciation' => 'to',
                'type' => 'single'
            ],
            [
                'character' => 'の',
                'pronunciation' => 'no',
                'type' => 'single'
            ],
            [
                'character' => 'は',
                'pronunciation' => 'ha',
                'type' => 'single'
            ],
            [
                'character' => 'ま',
                'pronunciation' => 'ma',
                'type' => 'single'
            ],
            [
                'character' => 'や',
                'pronunciation' => 'ya',
                'type' => 'single'
            ],
            [
                'character' => 'ら',
                'pronunciation' => 'ra',
                'type' => 'single'
            ],
            [
                'character' => 'わ',
                'pronunciation' => 'wa',
                'type' => 'single'
            ],
            [
                'character' => 'ん',
                'pronunciation' => 'n',
                'type' => 'single'
            ],
            [
                'character' => 'ひ',
                'pronunciation' => 'hi',
                'type' => 'single'
            ],
            [
                'character' => 'み',
                'pronunciation' => 'mi',
                'type' => 'single'
            ],
            [
                'character' => 'り',
                'pronunciation' => 'ri',
                'type' => 'single'
            ],
            [
                'character' => 'ふ',
                'pronunciation' => 'fu',
                'type' => 'single'
            ],
            [
                'character' => 'む',
                'pronunciation' => 'mu',
                'type' => 'single'
            ],
            [
                'character' => 'ゆ',
                'pronunciation' => 'yu',
                'type' => 'single'
            ],
            [
                'character' => 'る',
                'pronunciation' => 'ru',
                'type' => 'single'
            ],
            [
                'character' => 'へ',
                'pronunciation' => 'he',
                'type' => 'single'
            ],
            [
                'character' => 'め',
                'pronunciation' => 'me',
                'type' => 'single'
            ],
            [
                'character' => 'れ',
                'pronunciation' => 're',
                'type' => 'single'
            ],
            [
                'character' => 'ほ',
                'pronunciation' => 'ho',
                'type' => 'single'
            ],
            [
                'character' => 'も',
                'pronunciation' => 'mo',
                'type' => 'single'
            ],
            [
                'character' => 'よ',
                'pronunciation' => 'yo',
                'type' => 'single'
            ],
            [
                'character' => 'ろ',
                'pronunciation' => 'ro',
                'type' => 'single'
            ],
            [
                'character' => 'を',
                'pronunciation' => 'wo',
                'type' => 'single'
            ],
            [
                'character' => 'きゃ',
                'pronunciation' => 'kya',
                'type' => 'combo'
            ],
            [
                'character' => 'しゃ',
                'pronunciation' => 'sha',
                'type' => 'combo'
            ],
            [
                'character' => 'ちゃ',
                'pronunciation' => 'cha',
                'type' => 'combo'
            ],
            [
                'character' => 'にゃ',
                'pronunciation' => 'nya',
                'type' => 'combo'
            ],
            [
                'character' => 'きゅ',
                'pronunciation' => 'kyu',
                'type' => 'combo'
            ],
            [
                'character' => 'しゅ',
                'pronunciation' => 'shu',
                'type' => 'combo'
            ],
            [
                'character' => 'ちゅ',
                'pronunciation' => 'chu',
                'type' => 'combo'
            ],
            [
                'character' => 'にゅ',
                'pronunciation' => 'nyu',
                'type' => 'combo'
            ],
            [
                'character' => 'きょ',
                'pronunciation' => 'kyo',
                'type' => 'combo'
            ],
            [
                'character' => 'しょ',
                'pronunciation' => 'sho',
                'type' => 'combo'
            ],
            [
                'character' => 'ちょ',
                'pronunciation' => 'cho',
                'type' => 'combo'
            ],
            [
                'character' => 'にょ',
                'pronunciation' => 'nyo',
                'type' => 'combo'
            ],
            [
                'character' => 'ひゃ',
                'pronunciation' => 'hya',
                'type' => 'combo'
            ],
            [
                'character' => 'みゃ',
                'pronunciation' => 'mya',
                'type' => 'combo'
            ],
            [
                'character' => 'りゃ',
                'pronunciation' => 'rya',
                'type' => 'combo'
            ],
            [
                'character' => 'ぎゃ',
                'pronunciation' => 'gya',
                'type' => 'combo'
            ],
            [
                'character' => 'ひゅ',
                'pronunciation' => 'hyu',
                'type' => 'combo'
            ],
            [
                'character' => 'みゅ',
                'pronunciation' => 'myu',
                'type' => 'combo'
            ],
            [
                'character' => 'りゅ',
                'pronunciation' => 'ryu',
                'type' => 'combo'
            ],
            [
                'character' => 'ぎゅ',
                'pronunciation' => 'gyu',
                'type' => 'combo'
            ],
            [
                'character' => 'ひょ',
                'pronunciation' => 'hyo',
                'type' => 'combo'
            ],
            [
                'character' => 'みょ',
                'pronunciation' => 'myo',
                'type' => 'combo'
            ],
            [
                'character' => 'りょ',
                'pronunciation' => 'ryo',
                'type' => 'combo'
            ],
            [
                'character' => 'ぎょ',
                'pronunciation' => 'gyo',
                'type' => 'combo'
            ],
            [
                'character' => 'じゃ',
                'pronunciation' => 'ja',
                'type' => 'combo'
            ],
            [
                'character' => 'ぢゃ',
                'pronunciation' => 'ja',
                'type' => 'combo'
            ],
            [
                'character' => 'びゃ',
                'pronunciation' => 'bya',
                'type' => 'combo'
            ],
            [
                'character' => 'ぴゃ',
                'pronunciation' => 'pya',
                'type' => 'combo'
            ],
            [
                'character' => 'じゅ',
                'pronunciation' => 'ju',
                'type' => 'combo'
            ],
            [
                'character' => 'ぢゅ',
                'pronunciation' => 'ju',
                'type' => 'combo'
            ],
            [
                'character' => 'びゅ',
                'pronunciation' => 'byu',
                'type' => 'combo'
            ],
            [
                'character' => 'ぴゅ',
                'pronunciation' => 'pyu',
                'type' => 'combo'
            ],
            [
                'character' => 'じょ',
                'pronunciation' => 'jo',
                'type' => 'combo'
            ],
            [
                'character' => 'ぢょ',
                'pronunciation' => 'jo',
                'type' => 'combo'
            ],
            [
                'character' => 'びょ',
                'pronunciation' => 'byo',
                'type' => 'combo'
            ],
            [
                'character' => 'ぴょ',
                'pronunciation' => 'pyo',
                'type' => 'combo'
            ],
            [
                'character' => 'が',
                'pronunciation' => 'ga',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ざ',
                'pronunciation' => 'za',
                'type' => 'dakuten'
            ],
            [
                'character' => 'だ',
                'pronunciation' => 'da',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ば',
                'pronunciation' => 'ba',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぱ',
                'pronunciation' => 'pa',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぎ',
                'pronunciation' => 'gi',
                'type' => 'dakuten'
            ],
            [
                'character' => 'じ',
                'pronunciation' => 'ji',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぢ',
                'pronunciation' => 'ji',
                'type' => 'dakuten'
            ],
            [
                'character' => 'び',
                'pronunciation' => 'bi',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぴ',
                'pronunciation' => 'pi',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぐ',
                'pronunciation' => 'gu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ず',
                'pronunciation' => 'zu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'づ',
                'pronunciation' => 'zu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぶ',
                'pronunciation' => 'bu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぷ',
                'pronunciation' => 'pu',
                'type' => 'dakuten'
            ],
            [
                'character' => 'げ',
                'pronunciation' => 'ge',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぜ',
                'pronunciation' => 'ze',
                'type' => 'dakuten'
            ],
            [
                'character' => 'で',
                'pronunciation' => 'de',
                'type' => 'dakuten'
            ],
            [
                'character' => 'べ',
                'pronunciation' => 'be',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぺ',
                'pronunciation' => 'pe',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ご',
                'pronunciation' => 'go',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぞ',
                'pronunciation' => 'zo',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ど',
                'pronunciation' => 'do',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぼ',
                'pronunciation' => 'bo',
                'type' => 'dakuten'
            ],
            [
                'character' => 'ぽ',
                'pronunciation' => 'po',
                'type' => 'dakuten'
            ]
        ]);
    }
}
