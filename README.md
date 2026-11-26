# Build Brief

Turn your idea into a clear brief you can build from.

A free tool for founders and small teams. Your AI assistant interviews you about your idea, one question at a time, in plain words. It turns your answers into a numbered list of what your app needs to do, suggests what matters most, and then writes step-by-step prompts you paste into Lovable, Bolt or Cursor to build the first version you choose.

It suggests. You decide what goes in your first version.

You don't need a product or tech background, and it's free. It runs in your own ChatGPT or Claude account, so it uses that account's normal allowance. It takes about 45 to 60 minutes, in rounds, and you can stop after any round and carry on later.

## How to use it

### In ChatGPT or Claude (easiest)

1. Open the [Build Brief instructions](https://raw.githubusercontent.com/discovery-to-delivery-katmoo/build-brief/main/start/chat.md). A page of plain text opens.
2. Copy all of it: press **Ctrl+A**, then **Ctrl+C** (on a Mac, **Cmd+A**, then **Cmd+C**).
3. Open [chatgpt.com](https://chatgpt.com) or [claude.ai](https://claude.ai) and start a new chat.
4. Click in the message box, paste (**Ctrl+V** or **Cmd+V**) and press **Enter**.

It doesn't need web search.

### If you already use Claude Code

Type each line into Claude Code and press **Enter** after each one:

```
/plugin marketplace add discovery-to-delivery-katmoo/build-brief
```

```
/plugin install build-brief@build-brief
```

```
/build-brief:run
```

Everything is also saved in a `build-brief` folder in your project. Claude Code asks before it saves a file; say yes.

### What happens next

1. **Where you're starting.** It asks whether you have just an idea, a [Belief Check](https://github.com/discovery-to-delivery-katmoo/belief-check) report, or an app you want to add something to. If you have a report, paste it when asked.
2. **Questions, one at a time.** Each one gives a short example from your own idea and a few options. Pick one, or answer in your own words. "It depends" and "I don't know" are fine answers: it will help you work them out.
3. **Rounds.** First your goal and the people who'll use it, then how it runs day to day, then one round for each part of your app.
4. **After each round,** you get a short summary and a **save block**. To stop, copy the save block somewhere safe. To carry on later, paste the instructions into a new chat, then paste the save block. Or just say "carry on".
5. **Checks.** It points out anything unclear, anything that clashes, and anything that rests on a guess about people that hasn't been tested. Sometimes it offers a simpler way, which you can take or leave.
6. **What matters most.** It suggests "has to be in", "important" or "nice to have" for each item, with a reason based on what you told it. Then it asks you which ones go in your first version, and waits.
7. **Your tool.** It asks what you'll build with: Lovable, Bolt, Cursor or another.
8. **Your brief.** It sends four things, one at a time (say "next" for the next one):
   - the full brief
   - a one-page summary to share
   - numbered build prompts for your first version
   - a short list of guesses worth testing with Belief Check
9. **Save them.** Copy each into a document of your own (Google Docs, Word, Notes).

If it ever goes off track, tell it in plain words, for example "that's not what I meant, go back to booking" or "you skipped my question".

## What you get back

A brief where every item looks like this:

```markdown
R1.1 Clients book a walk
Clients book a walk from their phone, so they don't have to call.
How you'll know it works: a client books a walk on a phone, and it shows in the
owner's list within a minute.
Needs a look: none
Not chosen: booking by text message
```

And build prompts you paste one step at a time:

```markdown
Step 2 of 4: Booking
Build: clients book, change and cancel walks.
- R1.1 Clients book a walk. Check: a client books on a phone; it shows in the
  owner's list within a minute.
- R1.2a Regular clients book weekly. Check: ...
Not in this version: waiting lists, group walks.
Build only this step. Don't add features that aren't listed. When you're done,
tell me how to check each item above.
```

Building one step at a time, with a list of what's not included, helps AI builders like Lovable stay on track instead of adding things you didn't ask for.

See a full example from a test run, class booking for a small yoga studio: the [brief](examples/yoga-studio-brief.md) and the [build prompts](examples/yoga-studio-build-prompts.md).

## Works with Belief Check

Build Brief and [Belief Check](https://github.com/discovery-to-delivery-katmoo/belief-check) connect both ways:

- **Bring a Belief Check report** and Build Brief uses what was found. For example, if "clients would pay a booking fee" came back not supported, it tells you before you build it.
- **Take the guesses out.** Your brief ends with a ready-to-paste list of the guesses it rests on. Paste it into Belief Check to test them, then bring the report back to update your brief.

## Part of Discovery to Delivery

Build Brief is one of a set of free tools, one for each step of building a product, from first idea to release. See them all at [kathrynmoore.eu](https://www.kathrynmoore.eu/#products).

If it saved you time or trouble, you can support future tools through [GitHub Sponsors](https://github.com/sponsors/katmoo-works).

## Privacy

Your idea is shared only with the chat tool you use. If you don't want it used to train that tool's AI:
- **ChatGPT:** Settings, then Data controls, then turn off **Improve the model for everyone**.
- **Claude:** Settings, then Privacy, then turn off **Help improve Claude**.

## What it doesn't do

- It doesn't decide what goes in your first version. That depends on your goals and what you'll trade off.
- It doesn't build the app. It writes the prompts you give your builder.
- It isn't legal advice. If your app handles payments, people's locations, photos, health details or children, it will say that's worth checking with someone who knows the rules where you work.

## Licence

You can use it for free on your own ideas and apps, and on apps you build for clients, including as part of paid work. You can share and adapt it, with credit. What you can't do is sell it, or sell briefs made with it as your own product or service. Licence: [CC BY-NC 4.0](LICENSE), with this added permission from Kat Moore.
