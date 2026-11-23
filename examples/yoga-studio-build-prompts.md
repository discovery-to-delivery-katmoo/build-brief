<!-- A real, unedited output from a test run on 21 Nov 2026. The founder is a made-up test person; no real person's data is in it. -->

# Build prompts: class booking for a small yoga studio (Bolt)

## Before you start

- Make one test account for each kind of user in this version: a member, and you as the owner.
- Test on the oldest phone you can borrow, because some members have older phones.
- Don't put real injury details, or real members' names, emails or phone numbers, in until you've checked the rules.

Paste one step at a time into Bolt in Build mode. After each step, try the checks in the preview before pasting the next.

## Not in this version

- Deposits (R2)
- Instructor class lists (R4)

## Step 1

This step sets up the whole app: who signs in, who sees what, what it keeps, your weekly timetable, and how it looks.

- Two kinds of people use the app: the studio owner and members. The owner adds and changes classes and sees every booking. Members see the timetable and their own bookings. Check: signed in as a member, you can't open the screen where classes are added or changed.
- Each person makes an account with their email and a password, and anyone who forgets their password gets a reset link by email. Check: make an account, sign out, and sign back in. Check: tap "Forgot password"; a reset email arrives, and the new password works.
- The app keeps each member's name, email and phone number, and the owner adds an injury note when a member tells her about one. Check: open a member and see their name, email and phone number. Check: add an injury note to a member, sign out and back in; the note is still there.
- The owner adds classes to a weekly timetable, with the day and time, and each class repeats every week. Check: add a class on Tuesday at 18:00; it shows on the next two Tuesdays in the timetable.
- The owner sees who's booked into each class (checked in step 2, once booking is built).
- A member can cancel their own booking up to 12 hours before the class, and after that the app doesn't let them (checked in step 2).
- Members never see each other's details or injury notes (checked in step 2).
- The app works on phones up to 5 years old and opens the timetable within 5 seconds on slow mobile data. Check: on a phone about 5 years old, on slow mobile data, the timetable opens within 5 seconds.
- Text is never smaller than normal phone text, buttons are big enough to tap easily with a thumb, and every screen still works when someone turns on larger text on their phone. Check: turn on larger text in the phone's settings; every screen can still be read and used. Check: tap each button with a thumb without hitting the one next to it.
- The app looks calm, "like the studio, soft greens", nothing loud. Check: open the main screens; they use soft greens and nothing loud, and they feel calm to the owner.
- About 120 members will use it in a year. Keep running costs under 50 euros a month.

Not in this version:
- Selling yoga mats.

Build only this step. Don't add features that aren't listed. When you're done, tell me how to check each item above.

## Step 2

This step builds booking: members book a place in a class from the timetable.

- A member opens the timetable, taps a class and taps Book. Check: a member books a class on their phone; it shows in their bookings and on that class in the owner's view.
- Each class has 12 places, and once all 12 are booked nobody else can book it. Check: book 12 test members into one class; a 13th member sees the class is full and can't book. Check: two members tap Book on the last place at the same moment; only one gets it.
- After tapping Book, the member sees a "booked" message on screen and the class appears in their "My bookings" list. Check: book a class; a "booked" message shows straight away, and the class is in My bookings.

App-wide needs that apply here:
- The owner sees who's booked into each class. Check: a member books a class; their name shows on that class in the owner's view.
- A member can cancel their own booking up to 12 hours before the class, and after that the app doesn't let them. Check: cancel a booking 13 hours before the class; it works and the place is free again. Check: try to cancel 11 hours before; the app says it's too late to cancel.
- Members never see each other's details or injury notes. Check: signed in as a member, look at a class others have booked; you can't see any other member's name, email, phone number or injury notes.

Not in this version:
- Booking up to 2 weeks ahead (R1.3).
- Online classes.

Build only this step. Don't add features that aren't listed. When you're done, tell me how to check each item above.

## Step 3

This step builds the waitlist: members wait for a place in a full class.

- When all 12 places are taken, a "Join waitlist" button shows where "Book" was. Check: with a class full, a 13th member taps Join waitlist and sees that they're on the waitlist.
- When a booked place frees up, the first person on the waitlist gets an email and has 2 hours to take it; if they don't, it's offered to the next person. Check: cancel a booking in a full class; the first person on the waitlist gets an email. Check: leave the offer for 2 hours; the next person gets the email.
- A member taps "Leave waitlist" to take themselves off. Check: join a waitlist, then tap Leave waitlist; you're off it, and a freed place goes to the next person.

App-wide needs that apply here:
- Members never see each other's details or injury notes, so the waitlist shows no other member's name or details.
- Text and buttons stay easy to read and tap, and the look stays calm and soft green.

Not in this version:
- Nothing else from the waitlist is left out.

Build only this step. Don't add features that aren't listed. When you're done, tell me how to check each item above.

## For you

- Budget: keep running costs under 50 euros a month.
- Deadline: before January.
