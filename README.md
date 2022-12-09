# Advent of Code IDE
This is meant to be a super efficient way to do your advent of code problems.

This is meant to be *easy-to-use* so you can focus on your code and not the boilerplate.

## Features
* Monaco IDE
* View the prompt
* Util functions
    * Typings
* Customize file input based on tests or actual
* Reminders maybe?
* Choose challenge day

## What this is not
This isn't really an IDE for anything else, it won't be.

## Running
Run these 2 commands at the same time:
1. `npm run server`
2. `npm start`

To dev `lib/`, run this `npm run all`.
Note that any changes means autocomplete requires a page reload.

## Caveats/Todos
Right now, the `lib/` is a separate folder that's not in `public/`. Therefore, we can't access the util functions until after compilation. That means no script in `src/` can use them. There's no use for them other than in the editor which works, but a more 'better' solution is desired.