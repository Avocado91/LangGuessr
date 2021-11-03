import { argv } from 'process';
import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = argv[2]
const langCode = franc(input);
const language = langs.where('3', langCode);

if (!language) {
    console.log('Could not match a language. Please try again with a larger sample.'.red);
} else console.log(language.name.green);