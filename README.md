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
For development, run:
```sh
npm run dev
```

For production, run:
```sh
num run prod
```

And then, to release:
```sh
npm run server
```

## Caveats/Todos
Right now, the `lib/` is a separate folder that's not in `public/`. Therefore, we can't access the util functions until after compilation. That means no script in `src/` can use them. There's no use for them other than in the editor which works, but a more 'better' solution is desired.

Another todo is right now the only globally exported things are in `utils.ts` but `utils.ts` can only get so big before it becomes cluttery, and I also want to organize it. Therefore, we'll have to do something about that too soon.