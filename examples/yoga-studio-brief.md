<!-- A real, unedited output from a test run on 21 Nov 2026. The founder is a made-up test person; no real person's data is in it. -->

# Build Brief: class booking for a small yoga studio

21 Nov 2026

## 1. At a glance.

- **Main goal:** members book classes without messaging you.
- **The people:** members, instructors and you, the owner.
- **The parts:** R1 Booking, R2 Deposits, R3 Waitlist, R4 Instructor class lists.
- **Counts:** 11 requirements apply to everything. Of the other 16, 3 are proposed as has to be in, 12 as important and 1 as nice to have.
- **Still need evidence:** 4 requirements rest on guesses about people that are untested or only partly tested (R1.1, R2.1, R3.1, R3.2).

## 2. How to read this.

- Each requirement has an ID. R0 is the whole app; R1 to R4 are the parts, so R1.1 is the first item in Booking.
- "Has to be in", "Important" and "Nice to have" are the proposed priorities. "Assumed" means you accepted a common default; "assumed, not confirmed" is a starting guess you haven't decided on. "Needs evidence" and "partly tested" mean it rests on a guess about people that isn't tested, or is only partly tested.
- Dropped items stay in the brief so you can see what was considered. Nothing has been dropped so far.
- Your Belief Check report (19 Nov 2026) tested some of your guesses about people; where it did, you'll see 'backed by your Belief Check' or 'some evidence, not enough to rely on'.

## 3. The goal and the people.

- **The problem, in your words:** no-shows cost about 300 euros a month in empty places; everyone books by WhatsApp and you lose track of who's coming.
- **Main goal:** members booking without messaging you.
- **Members** book classes, see their bookings and cancel in time.
- **Instructors** need to see their class lists.
- **You, the owner,** set up the weekly timetable and see who's booked.
- **Success in a year:** no-shows halved, and you stop managing bookings on WhatsApp.
- **Who it's for:** your studio first. Other studios maybe later, not now.

## 4. How it runs.

- **Who does what:** you add and change classes and see every booking; members see the timetable and their own bookings; instructors see their own class lists (R0.1).
- **Signing in:** email and a password, with a reset link by email (R0.2).
- **What it keeps:** each member's name, email and phone number, and injury notes you add when a member tells you about one (R0.3).
- **Running it day to day:** you add classes to a weekly timetable and see who's booked in each class (R0.4, R0.5).
- **When things go wrong:** members can cancel up to 12 hours before (R0.6). No-shows are the big problem; deposits (R2) are meant to tackle them. Two people going for the last place: only one gets it (R1.2).
- **Devices:** some members have older phones or slow data; the app works on phones up to 5 years old (R0.7, assumed).
- **Privacy:** members never see each other's details or injuries (R0.8). Instructors seeing injury notes for their own classes is a starting guess (R0.9, assumed, not confirmed).
- **Accessibility:** readable text and easy-to-tap buttons, using the common default (R0.10, assumed).
- **Size:** about 120 members in a year.
- **Budget:** 50 euros a month for running costs.
- **Deadline:** before January.
- **What's not in:** selling yoga mats; online classes. Reminders before class were suggested and not chosen. Other studios are not in yet.
- **Rules notes:** injury notes (health details), names, emails and phone numbers (personal details) and deposits (payments). This may need checking with someone who knows the rules where you work.

## 5. Requirements, by part.

### R0 The whole app

**R0.1 Who sees and changes what**
- You add and change classes and see every booking, members see the timetable and their own bookings, and instructors see the lists for their own classes, so each person sees what they need.
- How you'll know it works: Signed in as a member, you can't open the screen where classes are added or changed. Signed in as an instructor, you see the lists for your own classes and not anyone else's.
- Kind: what it does
- Needs a look: the instructor piece is left out of the first version, with instructor class lists
- Not chosen: Instructors adding or changing their own classes.

**R0.2 Signing in**
- Each person makes an account with their email and a password, and anyone who forgets their password gets a reset link by email, so nobody needs you to get back in.
- How you'll know it works: Make an account with an email and password, sign out, and sign back in. Tap "Forgot password": a reset email arrives, and the new password works.
- Kind: what it does
- Not chosen: A sign-in link emailed each time, with no password.

**R0.3 What the app keeps**
- The app keeps each member's name, email and phone number, and you add an injury note when a member tells you about one, so it's all in one place.
- How you'll know it works: Open a member: you see their name, email and phone number. Add an injury note to a member, sign out and back in: the note is still there.
- Kind: what it does
- Needs a look: health details and personal details: may need checking with someone who knows the rules where you work

**R0.4 Your weekly timetable**
- You add classes to a weekly timetable, with the day and time, and each class repeats every week, so you don't add every class by hand.
- How you'll know it works: Add a class on Tuesday at 18:00: it shows on the next two Tuesdays in the timetable.
- Kind: what it does

**R0.5 You see who's booked**
- You see who's booked into each class, so you know who's coming without checking WhatsApp.
- How you'll know it works: A member books a class: their name shows on that class in your view.
- Kind: what it does

**R0.6 Members cancel up to 12 hours before**
- A member cancels their own booking up to 12 hours before the class, and after that the app doesn't let them, so cancelling doesn't need a message to you.
- How you'll know it works: Cancel a booking 13 hours before the class: it works and the place is free again. Try to cancel 11 hours before: the app says it's too late to cancel.
- Kind: what it does

**R0.7 Works on older phones and slow data**
- The app works on phones up to 5 years old and opens the timetable within 5 seconds on slow mobile data, because some members have older phones.
- How you'll know it works: On a phone about 5 years old, on slow mobile data, the timetable opens within 5 seconds.
- Kind: how well it works
- Needs a look: assumed

**R0.8 Members' details stay private**
- Members never see each other's details or injury notes, so what they share stays with the studio.
- How you'll know it works: Signed in as a member, look at a class others have booked: you can't see any other member's name, email, phone number or injury notes.
- Kind: how well it works

**R0.9 Instructors see injury notes for their classes**
- An instructor sees the injury notes of members booked into their own classes, so they can adjust the class.
- How you'll know it works: Signed in as an instructor, you see injury notes for members in your classes and none for anyone else.
- Kind: how well it works
- Needs a look: assumed, not confirmed (a starting guess; you haven't decided yet); left out of the first version, with instructor class lists

**R0.10 Easy to read and tap**
- Text is never smaller than normal phone text, buttons are big enough to tap easily with a thumb, and every screen still works when someone turns on larger text on their phone, so it's easy for everyone to read and use.
- How you'll know it works: Turn on larger text in the phone's settings: every screen can still be read and used. Tap each button with a thumb without hitting the one next to it.
- Kind: how well it works
- Needs a look: assumed

**R0.11 A calm look in soft greens**
- The app looks calm, in soft greens and nothing loud, so it feels like the studio.
- How you'll know it works: Open the main screens: they use soft greens and nothing loud, and they feel calm to you.
- Kind: look and feel
- In your words: "like the studio, soft greens"

### R1 Booking

**R1.1 Members book a class**
- A member opens the timetable, taps a class and taps Book, so they can book without messaging you.
- How you'll know it works: A member books a class on their phone: it shows in their bookings and on that class in your view.
- Kind: what it does
- Needs a look: partly tested: "Studio owners can reach their members to switch them over" has some evidence, not enough to rely on
- Backing belief: "Members of small studios would book through an app instead of messaging" (backed by your Belief Check); "Studio owners can reach their members to switch them over" (some evidence, not enough to rely on)
- Not chosen: Seeing only today's classes.

**R1.2 12 places per class**
- Each class has 12 places, and once all 12 are booked nobody else can book it, so a class never has more people than places.
- How you'll know it works: Book 12 test members into one class: a 13th member sees the class is full and can't book. Two members tap Book on the last place at the same moment: only one gets it.
- Kind: what it does

**R1.3 Booking up to 2 weeks ahead**
- Members can book classes up to 2 weeks ahead, so the timetable stays short and easy to change.
- How you'll know it works: A member can book a class 13 days away, and can't book one 3 weeks away.
- Kind: what it does
- Needs a look: assumed
- Not chosen: 1 week or 4 weeks ahead.

**R1.4 Members see their booking worked**
- After tapping Book, the member sees a "booked" message on screen and the class appears in their "My bookings" list, so they don't message you to check.
- How you'll know it works: Book a class: a "booked" message shows straight away, and the class is in My bookings.
- Kind: what it does
- Not chosen: A confirmation email as well.

### R2 Deposits

**R2.1 Members pay a 5 euro deposit**
- When a member books, they pay a 5 euro deposit, so fewer people book and then don't turn up.
- How you'll know it works: Book a class with a test card: 5 euros is taken and the booking is confirmed.
- Kind: what it does
- In your words: "I want deposits"
- Needs a look: partly tested: "A deposit at booking would cut no-shows" has some evidence, not enough to rely on; payments: may need checking with someone who knows the rules where you work; your Belief Check found "Members would pay a booking fee on top of the class price" unlikely; you kept the deposit because members get it back when they come
- Backing belief: "A deposit at booking would cut no-shows" (some evidence, not enough to rely on)

**R2.2 Deposit back when they come**
- When a member comes to the class, they get their 5 euros back on the day of the class, once they're marked as there.
- How you'll know it works: Mark a test member as there: a 5 euro refund to their card starts that day.
- Kind: what it does
- Needs a look: relies on R4.3 (instructors mark who came)

**R2.3 Deposit kept on a no-show**
- When a member doesn't come, the studio keeps the 5 euros, so a no-show costs the member and not you.
- How you'll know it works: Mark a test member as not there: no refund is made, and you see the 5 euros kept.
- Kind: what it does
- Needs a look: relies on R4.3 (instructors mark who came)

**R2.4 Deposit back when they cancel in time**
- When a member cancels more than 12 hours before the class, they get their 5 euros back, because they cancelled in time.
- How you'll know it works: Cancel a booking 13 hours before: a 5 euro refund to the card starts.
- Kind: what it does
- Not chosen: You keeping it; half back.

**R2.5 Paying by card in the app**
- Members pay the deposit by card in the app, through a payment service, so the money is in before the place is held.
- How you'll know it works: Book with a test card that works: the booking goes through. Book with a test card that's declined: the app says the payment didn't work and no place is held.
- Kind: what it does
- Needs a look: assumed; payment services usually take a small fee on each payment
- Not chosen: Bank transfer; cash at the studio.

### R3 Waitlist

**R3.1 Members join a waitlist**
- When all 12 places are taken, a "Join waitlist" button shows where "Book" was, so a member can wait for a place without messaging you.
- How you'll know it works: With a class full, a 13th member taps Join waitlist and sees that they're on the waitlist.
- Kind: what it does
- Needs a look: needs evidence: that members will use a waitlist
- Not chosen: Messaging you to be added.

**R3.2 A freed place is offered in turn**
- When a booked place frees up, the first person on the waitlist gets an email and has 2 hours to take it; if they don't, it's offered to the next person, so freed places get filled.
- How you'll know it works: Cancel a booking in a full class: the first person on the waitlist gets an email. Leave the offer for 2 hours: the next person gets the email.
- Kind: what it does
- Needs a look: assumed; needs evidence: that members take an offered place within 2 hours
- Not chosen: Emailing everyone, first to book gets it (offered again in the checks round as a simpler way; you kept this one).

**R3.3 Members leave the waitlist**
- A member taps "Leave waitlist" to take themselves off, so they aren't offered a place they no longer want.
- How you'll know it works: Join a waitlist, then tap Leave waitlist: you're off it, and a freed place goes to the next person.
- Kind: what it does
- Not chosen: Staying on until the class starts.

### R4 Instructor class lists

**R4.1 Instructors see their class lists**
- An instructor signs in and sees the names of the members booked into each of their classes, so they know who's coming.
- How you'll know it works: Signed in as an instructor, open one of your classes: you see the names of the members booked.
- Kind: what it does
- Not chosen: Phone numbers as well.

**R4.2 You pick each class's instructor**
- When you add a class to the timetable, you pick its instructor, so the app knows whose class it is.
- How you'll know it works: Add a class and pick an instructor: that instructor sees it in their classes, and another instructor doesn't.
- Kind: what it does
- Not chosen: Instructors picking their own classes.

**R4.3 Instructors mark who came**
- After a class, the instructor ticks the names of the members who came on the class list, so deposits are returned or kept.
- How you'll know it works: Tick 10 of 12 names after a class: those 10 are marked as there and the other 2 as not there.
- Kind: what it does
- Needs a look: assumed
- Not chosen: You marking it; members checking in themselves.

**R4.4 You make someone an instructor**
- You mark a person's account as an instructor, so only your instructors see class lists.
- How you'll know it works: Mark a test account as an instructor: it can now see class lists. An account you haven't marked can't.
- Kind: what it does

## 6. Look and feel.

Calm, "like the studio, soft greens", nothing loud (R0.11).

## 7. Proposed priority.

**Applies to everything** (always in the first version; you can drop one if you want to):
- R0.1 Who sees and changes what: You add and change classes and see every booking, members see the timetable and their own bookings, and instructors see the lists for their own classes, so each person sees what they need.
- R0.2 Signing in: Each person makes an account with their email and a password, and anyone who forgets their password gets a reset link by email, so nobody needs you to get back in.
- R0.3 What the app keeps: The app keeps each member's name, email and phone number, and you add an injury note when a member tells you about one, so it's all in one place.
- R0.4 Your weekly timetable: You add classes to a weekly timetable, with the day and time, and each class repeats every week, so you don't add every class by hand.
- R0.5 You see who's booked: You see who's booked into each class, so you know who's coming without checking WhatsApp.
- R0.6 Members cancel up to 12 hours before: A member cancels their own booking up to 12 hours before the class, and after that the app doesn't let them, so cancelling doesn't need a message to you.
- R0.7 Works on older phones and slow data: The app works on phones up to 5 years old and opens the timetable within 5 seconds on slow mobile data, because some members have older phones.
- R0.8 Members' details stay private: Members never see each other's details or injury notes, so what they share stays with the studio.
- R0.9 Instructors see injury notes for their classes: An instructor sees the injury notes of members booked into their own classes, so they can adjust the class.
- R0.10 Easy to read and tap: Text is never smaller than normal phone text, buttons are big enough to tap easily with a thumb, and every screen still works when someone turns on larger text on their phone, so it's easy for everyone to read and use.
- R0.11 A calm look in soft greens: The app looks calm, in soft greens and nothing loud, so it feels like the studio.

| ID | Title | Proposed priority | Reason |
| --- | --- | --- | --- |
| R1.1 | Members book a class | Has to be in | You said the one thing to get right is members booking without messaging you. Backed by your Belief Check; getting members to switch over has some evidence, not enough to rely on. |
| R1.2 | 12 places per class | Has to be in | Without the 12-place limit, more people could book than the room holds, so booking wouldn't work. |
| R1.3 | Booking up to 2 weeks ahead | Important | A starting default you accepted; members can still book without a limit on how far ahead. |
| R1.4 | Members see their booking worked | Has to be in | If members can't see their booking worked, they'll message you to check, which is what you want to stop. |
| R2.1 | Members pay a 5 euro deposit | Important | You said "I want deposits", and halving no-shows is your first success measure. Not has to be in because members can book without it, and your Belief Check found some evidence, not enough to rely on, that deposits cut no-shows. |
| R2.2 | Deposit back when they come | Important | Goes with R2.1: members need their 5 euros back when they come. |
| R2.3 | Deposit kept on a no-show | Important | Goes with R2.1: keeping the 5 euros is what tackles the 300 euros a month you lose to no-shows. |
| R2.4 | Deposit back when they cancel in time | Important | Goes with R2.1: you said they get it back if they cancel in time. |
| R2.5 | Paying by card in the app | Important | Goes with R2.1: a default you accepted for taking the deposit. |
| R3.1 | Members join a waitlist | Important | You named the waitlist in your first answer; without it, members can still check the timetable for a free place. Needs evidence that members will use it. |
| R3.2 | A freed place is offered in turn | Important | Goes with R3.1; a default you accepted, and it needs evidence that members take an offered place within 2 hours. |
| R3.3 | Members leave the waitlist | Nice to have | Without it, a member can just ignore the offer email. |
| R4.1 | Instructors see their class lists | Important | You said instructors need to see their class lists; until then you can tell them who's booked from your own view (R0.5). |
| R4.2 | You pick each class's instructor | Important | Goes with R4.1: the app needs to know whose class it is. |
| R4.3 | Instructors mark who came | Important | Deposits need someone to mark who came; this matters once deposits are in. |
| R4.4 | You make someone an instructor | Important | Goes with R4.1: only instructors should see class lists. |

Choosing what goes in your first version is a judgement call about your product: your goals, your users and what you're willing to trade off. It's often worth talking it through with someone who has made calls like this before.

**Your first version (your choice):** R1.1 Members book a class; R1.2 12 places per class; R1.4 Members see their booking worked; R3.1 Members join a waitlist; R3.2 A freed place is offered in turn; R3.3 Members leave the waitlist; plus everything under "Applies to everything", without the instructor pieces of R0.1 and R0.9.

**Not in it:** R1.3 Booking up to 2 weeks ahead; R2.1 Members pay a 5 euro deposit; R2.2 Deposit back when they come; R2.3 Deposit kept on a no-show; R2.4 Deposit back when they cancel in time; R2.5 Paying by card in the app; R4.1 Instructors see their class lists; R4.2 You pick each class's instructor; R4.3 Instructors mark who came; R4.4 You make someone an instructor.

## 8. Open questions and assumptions.

**Decide before building**
- Nothing.

**Can wait**
- R0.9 Instructors see injury notes for their classes: you haven't decided yet (assumed, not confirmed). It's left out of the first version with instructor class lists.
- Other studios using the app: maybe later.
- Defaults you accepted (assumed): R0.7 Works on older phones and slow data; R0.10 Easy to read and tap; R1.3 Booking up to 2 weeks ahead; R2.5 Paying by card in the app; R3.2 A freed place is offered in turn; R4.3 Instructors mark who came.

## 9. Guesses worth testing.

- Studio owners can reach their members to switch them over (some evidence, not enough to rely on): R1.1.
- A deposit at booking would cut no-shows (some evidence, not enough to rely on): R2.1.
- Members will join a waitlist and take an offered place within 2 hours of the email (untested): R3.1, R3.2.
