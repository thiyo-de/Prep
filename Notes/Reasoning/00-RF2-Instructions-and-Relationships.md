# RF2 — Reasoning Basics: Instructions and Relationships | வழிமுறைகள் மற்றும் உறவுகள்

**Purpose:** Learn to read a question accurately, represent its facts and check what follows. This covers all five RF2 items in your [Reasoning checklist](../../Plan/Subject-Checklists/REASONING-CHECKLIST.md).

**Before this:** Complete [RF1: Letters and Numbers](00-RF1-Letters-and-Numbers.md). Here you only need basic counting and small additions/subtractions. Full direction-distance, blood-relation, ranking, seating and syllogism chapters come later.

**Question source:** The 25 worked models and 25 independent questions are original teaching exercises, not verified SSC/RRB PYQs. A model that deliberately has insufficient information teaches you to recognise that limit; it is not a failed question to fix by guessing.

| Route | Checklist item | What you should be able to do |
|---|---|---|
| 1 | Not, except, only, neither, at least, at most | Turn wording into an exact condition |
| 2 | Left/right, compass directions and turns | Track facing direction and location separately |
| 3 | Family, generations and gender clues | Draw relationships without inventing missing facts |
| 4 | Older/younger, taller/shorter and ranks | Build an order and recognise unknown comparisons |
| 5 | Tables, diagrams and condition checking | Test every rule; distinguish possible from necessary |
| 6–8 | Practice and revision | Solve independently, explain answers and record reviews |

## 1. 📖 Read the instruction before solving

### 1.1 Three parts of a reasoning question

1. **Given facts:** information to accept for this question.
2. **Conditions:** restrictions every valid answer must obey.
3. **Target:** what the question asks you to find.

Think of a small recipe: “Use two cups; do not add sugar.” Knowing the ingredients is not enough if you ignore the restriction. In reasoning, words such as **not** and **only** can change the entire task.

| Term | Tamil support | Simple meaning |
|---|---|---|
| Statement | கூற்று | A claim supplied in the question |
| Condition / constraint | நிபந்தனை / கட்டுப்பாடு | A rule the answer must satisfy |
| Conclusion | முடிவு | What you infer from the facts |
| Assumption | ஊகம் | Something you add without being told or proving it |
| Definite / necessary | உறுதியான / கட்டாயமான | True in every arrangement satisfying the facts |
| Possible | சாத்தியமான | True in at least one valid arrangement |
| Impossible | சாத்தியமற்ற | True in no valid arrangement |
| Insufficient information | போதுமான தகவல் இல்லை | The supplied facts do not decide the requested answer |

### 1.2 Essential instruction words

| Wording | Meaning | Example |
|---|---|---|
| Not | Negates the stated property | “Not even,” for an integer, means odd. |
| Except | The item outside the stated property | “All these are odd except…” asks for a non-odd item. |
| Only A are B | Every B must be A | Only members enter → entrants must be members. |
| Neither A nor B | Not A and not B | Neither tea nor coffee → both are excluded. |
| At least k | k or more; lower bound | At least 2 → 2, 3, 4, … within the allowed total. |
| At most k | k or fewer; upper bound | At most 2 selections → 0, 1 or 2 unless another condition excludes zero. |
| Exactly k | k, no more and no less | Exactly 2 → only the count 2. |
| More than k | Strictly above k | More than 2 people → 3 or more. |
| Fewer than k | Strictly below k | Fewer than 2 people → 0 or 1 if zero is permitted. |
| Immediately | No intervening position/item | Immediately left means the neighbouring position, not anywhere on the left. |

**Bounds — வரம்புகள்:** “At least” includes the boundary; “more than” does not. “At most” includes the boundary; “fewer than” does not.

For non-negative integer counts, **not at least 3** means **at most 2**. **Not at most 3** means **at least 4**. Negating “exactly 3” allows both smaller and larger counts; it does not mean only “more than 3.”

### 1.3 The important “only” direction

```text
Only ticket holders may enter.

Person may enter → person has a ticket
Person has a ticket ⇏ guaranteed entry
```

Here `→` means “implies” and `⇏` means “does not necessarily imply.” A ticket is **necessary** (தேவையானது) but the statement does not promise that it is **sufficient** (அதுவே போதுமானது): another rule may also apply.

- “Only A are B” means **B → A**.
- “All A are B” means **A → B**.
- Neither sentence, by itself, proves that an A or B actually exists.
- “Only Ravi solved it” identifies Ravi as a solver and excludes other solvers; read the whole sentence rather than memorising the word “only” in isolation.

**Neither/nor versus not both:** Neither tea nor coffee means **no tea AND no coffee**. Not both tea and coffee allows either one, or neither. They are different conditions. Ordinary logical “A or B” includes the possibility of both unless the wording makes the choice exclusive.

> **தமிழில்:** “குறைந்தது” என்பது அதையும் அதற்கு மேலான எண்ணிக்கைகளையும் குறிக்கும். “அதிகபட்சம்” என்பது அதையும் அதற்குக் கீழான எண்ணிக்கைகளையும் குறிக்கும். “உறுதியாக உண்மை” என்றால் அனுமதிக்கப்பட்ட எல்லா அமைப்புகளிலும் உண்மையாக இருக்க வேண்டும்.

### 1.4 Five worked models

**I1. All the following are even EXCEPT: 12, 18, 21, 30.**

1. The target is the item that is **not even**; underline EXCEPT.
2. 12, 18 and 30 divide by 2; 21 does not.
3. **Answer: 21.** Check: selecting 18 would satisfy the property instead of finding its exception.

**I2. Only members may enter a room. Leela is allowed to enter under this rule. Must she be a member? Does every member necessarily enter?**

1. Translate: allowed entrant → member.
2. Leela's allowed entry therefore implies membership.
3. **Answer: Leela must be a member; the statement does not guarantee entry for every member.** Check: do not reverse the implication or confuse permission with actual attendance.

**I3. Ravi chooses neither tea nor coffee. Which option obeys this: tea only, coffee only, both, or water only?**

1. Neither excludes tea and excludes coffee.
2. Tea only, coffee only and both each violate at least one exclusion.
3. **Answer: Water only, among these options.** Check: this establishes the compatible option, not a general fact that everyone rejecting tea/coffee must choose water.

**I4. Select at least 2 and at most 3 people from four people. Which selection sizes are allowed?**

1. At least 2 allows 2, 3 and 4 within this group.
2. At most 3 allows 0, 1, 2 and 3; keep only counts satisfying both conditions.
3. **Answer: 2 or 3.** Check: the actual people chosen are not specified; this question asks only for counts.

**I5. A box contains exactly one red OR one blue ball; its colour is not stated. Is “the ball is red” definitely true, possible or impossible?**

1. One valid case is red; another valid case is blue.
2. The claim is true in the first case and false in the second.
3. **Answer: Possible, but not definitely true.** Check: lacking proof of red does not prove blue. Here exactly one ball makes the two colour alternatives exclusive as stated.

## 2. 🧭 Left/right, compass directions and turns

### 2.1 Fix the viewpoint

**Left and right belong to a person or a stated viewpoint.** They do not always match the page's left and right. For the diagrams here, north is at the top of the page and east at the right.

```text
                    North (N) — வடக்கு
                         ↑
      North-west (NW)    |    North-east (NE)
                         |
West (W) — மேற்கு  ←-----+-----→  East (E) — கிழக்கு
                         |
      South-west (SW)    |    South-east (SE)
                         ↓
                    South (S) — தெற்கு
```

Intermediate directions: **NE — வடகிழக்கு; NW — வடமேற்கு; SE — தென்கிழக்கு; SW — தென்மேற்கு**. They lie between the main compass directions.

| Facing | Person's left | Person's right | Behind |
|---|---|---|---|
| North | West | East | South |
| East | North | South | West |
| South | East | West | North |
| West | South | North | East |

**Facing — முகம் நோக்கும் திசை. Turn — திருப்பம்.** A plain left/right turn in these models is 90° (a quarter-turn). A half-turn is 180°; a full turn is 360°. Follow explicit angles if another question gives them.

- **Clockwise — கடிகாரத் திசை:** N → E → S → W → N. A right quarter-turn follows this order.
- **Anticlockwise — எதிர்கடிகாரத் திசை:** N → W → S → E → N. A left quarter-turn follows this order.
- Turning in place changes facing, not location.
- Moving changes location. If facing and direction of movement differ, the wording must tell you; do not assume a sideways move turns the person.

### 2.2 Keep two separate records

```text
Facing: which way the person is looking
Position: where the person is relative to the start
```

For simple paths, track east/west movement in one column and north/south movement in another. Opposite movements cancel. **Distance travelled** counts the full path; **final displacement** means the straight-line change from the start.

> **தமிழில்:** ஒருவர் தெற்கு நோக்கி நின்றால் அவருடைய இடப்பக்கம் கிழக்கு. திரும்புவது மட்டும் இடத்தை மாற்றாது. கடைசியாக முகம் நோக்கும் திசையும், தொடக்க இடத்திலிருந்து இருக்கும் திசையும் வேறாக இருக்கலாம்.

### 2.3 Five worked models

**D1. You face north and turn right by 90°. Which way do you face?**

1. Begin at N on the compass.
2. Move one clockwise step: N → E.
3. **Answer: East.** Check: no movement was stated, so your location remains unchanged.

**D2. You face south and turn left by 90°. Which way do you face?**

1. Left means the person's left, not the page's left.
2. From S, one anticlockwise quarter-turn gives E.
3. **Answer: East.** Check: W would be the right side of a south-facing person.

**D3. Starting east, turn left, right, then right; each turn is 90°. Final facing?**

1. East → left → North.
2. North → right → East; East → right → South.
3. **Answer: South.** Check: update after each turn; do not apply every turn to the original east direction.

**D4. Walk 4 m north, 3 m east, then 4 m south, facing the direction of each walk. Where are you from the start, how far did you walk, and where do you face?**

```text
       (0,4) ----3 m----> (3,4)
         ↑                  ↓
        4 m                4 m
         |                  |
Start (0,0)             End (3,0)
```

1. North 4 m and south 4 m cancel; east 3 m remains.
2. Total path = 4 + 3 + 4 = 11 m. The end is 3 m east of the start.
3. **Answer: Position 3 m east; distance walked 11 m; facing south.** Check: the final southward walk does not place you south of the start.

**D5. A person makes a 90° right turn and then another 90° right turn. Their initial facing is unknown. What absolute compass direction do they face?**

1. Two right quarter-turns make 180°, so they face opposite their original direction.
2. Starting north would end south; starting east would end west.
3. **Answer: Absolute direction cannot be determined; it is opposite the starting direction.** Check: a relative change can be known even when the original reference is missing.

**Extra boundary:** “A is to B's left” needs a viewpoint when people can face different directions. In a simple printed row, use the stated page order; in seating problems, check whether people face north/south or inward/outward. Do not silently transfer one convention to another.

## 3. 👪 Family terms, generations and gender clues

### 3.1 Read the relationship from the correct person

“A is the father of B” means **A → parent of → B**. Asked “How is B related to A?”, the answer must describe **B's role**, not repeat A's role.

| Term | Tamil support | What it tells you |
|---|---|---|
| Parent | பெற்றோர் | One generation above the child; parent alone does not specify gender |
| Child | பிள்ளை | One generation below the parent; gender unspecified |
| Father / mother | தந்தை / தாய் | Male parent / female parent in these relationship questions |
| Son / daughter | மகன் / மகள் | Male child / female child |
| Brother / sister | சகோதரன் / சகோதரி | Male sibling / female sibling |
| Spouse | வாழ்க்கைத்துணை | Married partner; this term alone does not specify gender |
| Grandfather / grandmother | தாத்தா / பாட்டி | Parent's father / mother |
| Grandchild | பேரப்பிள்ளை | Child's child; gender unspecified |
| Maternal | தாய்வழி | Through the mother |
| Paternal | தந்தைவழி | Through the father |
| Uncle / aunt | பெற்றோரின் சகோதரர் / சகோதரி, in the blood links here | Parent's brother / sister in these examples; English also uses these terms for some relatives by marriage |
| Nephew / niece | உடன்பிறந்தவரின் மகன் / மகள், in these examples | Sibling's son / daughter |
| Cousin | பெற்றோரின் உடன்பிறந்தவருடைய பிள்ளை | Child of a parent's sibling; gender not specified by “cousin” alone |

Tamil distinguishes some relations that English groups together: **mother's brother = தாய்மாமா; father's sister = அத்தை**. For other relations, write the complete family path rather than relying on an ambiguous everyday label.

### 3.2 A small family tree

```text
Grandparent level       Arun (male)
                             |
Parent level            Bela (female)
                             |
Child level             Charu (gender unknown)

Vertical line = parent → child
```

Arun is two parent links above Charu, so he is Charu's grandfather. Charu is Arun's grandchild; “grandson” would require a male-gender clue for Charu.

**Generation — தலைமுறை:** level in the family tree. Parents are one level above children; grandparents two levels above. Siblings share a generation. Generation is not the same as exact age: the question must supply ages if you need them.

**Model convention:** The brother/sister links in this foundation's exercises describe full siblings, and parent-child links follow the stated tree. In other questions, use any supplied half-sibling, adoption, stepfamily or marriage facts rather than replacing them with this teaching convention. A shared parent must be given or follow from the specified sibling relationship; two adults connected to one child are not automatically spouses.

### 3.3 Five worked models

**F1. Arun is Bela's father. Bela is Charu's mother. How is Arun related to Charu?**

1. Draw Arun → Bela → Charu, with each arrow meaning parent → child.
2. Arun is two generations above Charu, through Charu's mother Bela.
3. **Answer: Maternal grandfather.** Check: Charu's gender is unnecessary because the question asks about Arun, whose gender is given by father.

**F2. Asha is Bala's sister. Bala is Chitra's father. How is Asha related to Chitra?**

1. Asha is female and is a sibling of Bala.
2. Bala is Chitra's father, so Asha is Chitra's father's sister.
3. **Answer: Paternal aunt.** Check: aunt is one generation above Chitra; sister would place her in Chitra's own generation.

**F3. My mother's brother has a daughter, Meena. How is Meena related to me?**

1. Mother's brother is a maternal uncle.
2. His daughter is the child of my parent's sibling.
3. **Answer: Cousin.** Check: she is not my sister merely because she belongs to my generation. My own gender is not needed.

**F4. A is B's brother. B is C's parent. How is A related to C? Can we say maternal or paternal?**

1. “Brother” establishes A as male; it does not establish B's gender.
2. A is the brother of C's parent, so he is an uncle.
3. **Answer: Uncle; maternal/paternal side is not determined.** Check: calling B a father would add a clue that was not supplied.

**F5. P is Q's child. Q is R's sister. Is P R's nephew or niece?**

1. P is the child of R's sibling Q.
2. P's gender is not given by “child”; Q's gender does not determine P's.
3. **Answer: P is R's sibling's child; nephew versus niece cannot be determined.** Check: names or letter labels are not gender evidence.

> **Trap:** “A is the brother of B” specifies A's gender, not B's. “A is the only son of B” excludes other sons of B; it does not exclude daughters. **Only son ≠ only child.**

**Useful diagram habit:** Write `M`, `F` or `?` beside each person. Add one relationship at a time. Label marriage separately if it is explicitly stated; never draw a marriage line merely because two people share a generation.

## 4. 📏 Comparisons and ranks

### 4.1 Put every comparison on one scale

**Comparison — ஒப்பீடு:** deciding which item is older, taller, heavier or earlier. **Rank — தரவரிசை / இடம்:** an item's numbered position in a specified order.

For height, write **A > B** to mean **A is taller than B**. For age, the same sign can mean **A is older than B**. Label the scale before using it; never mix height and age in one chain.

- A is shorter than B → B > A on the height scale.
- A is younger than B → B > A on the age scale.
- A > B and B > C → A > B > C, so A > C. This is a **transitive** relationship: a valid comparison can pass through the middle item.
- A > B and C > B do **not** establish A > C or C > A.

**Strict comparisons** such as taller/older exclude equality between those compared people. A ranking formula needs a single ordered row and distinct positions; ties require the question's own tie rules.

### 4.2 Position from both ends

For one person in a row of N people with no tied positions:

**Left rank + right rank = N + 1**.

Why? Each count includes the same person. Adding the two counts counts that person twice. Therefore:

- **N = left rank + right rank − 1**.
- **Right rank = N − left rank + 1**.
- The same rule works for top/bottom ranks in a single ordered list.
- Between two **distinct positions counted from the same end**: **larger rank − smaller rank − 1**.

```text
Left →   A   B   C   D   E   ← Right
Rank     1   2   3   4   5

C is 3rd from either end: 3 + 3 − 1 = 5 people.
```

> **தமிழில்:** பெரியவர்/சிறியவர், உயரமானவர்/குட்டையானவர் ஆகிய உறவுகளை ஒரே திசையில் எழுதுங்கள். இரண்டு முனைகளிலிருந்தும் எண்ணும்போது ஒரே நபர் இரண்டு முறை எண்ணப்படுவதால் மொத்தத்தில் 1 கழிக்க வேண்டும்.

### 4.3 Five worked models

**C1. A is taller than B. B is taller than C. Who is tallest among these three?**

1. First fact: A > B.
2. Second fact: B > C; combine as A > B > C.
3. **Answer: A.** Check: this does not establish who is tallest in a larger group containing other people.

**C2. Ravi is younger than Sita. Tara is older than Sita. Who is youngest among them?**

1. On an older-to-younger scale: Sita > Ravi.
2. Tara > Sita, so Tara > Sita > Ravi.
3. **Answer: Ravi.** Check: rewrite younger-than before joining the chain; do not keep the words' reading order as a rank order.

**C3. A student is 6th from the top and 9th from the bottom in one list with no ties. How many students are listed?**

1. Both ranks include that same student.
2. Total = 6 + 9 − 1 = 14.
3. **Answer: 14.** Check: 5 are above and 8 below; 5 + 1 + 8 = 14.

**C4. In a 20-person row, A is 5th from the left; B is 8th from the right. How many people are between them?**

1. Convert B to a left rank: 20 − 8 + 1 = 13.
2. Both ranks now use the same end: 13 − 5 − 1 = 7.
3. **Answer: 7.** Check: positions 6 through 12 lie between A at 5 and B at 13. Subtracting 8 and 5 directly mixes reference ends.

**C5. A is older than B. C is older than B. Who is older, A or C?**

1. The facts give A > B and C > B.
2. Both A > C > B and C > A > B satisfy those facts; A and C could also be equal in age.
3. **Answer: Cannot be determined.** Check: B is younger than both, but this does not order A against C.

## 5. 🗂️ Simple tables, diagrams and condition checking

### 5.1 Put each fact where you can see it

Choose a representation matching the relationship:

| Information | Useful representation | What to label |
|---|---|---|
| Facing and movement | Compass + path | Start, turns, distances and end |
| Family relationships | Tree | Gender clues and generation levels |
| Taller/older/order | Comparison chain | What > means |
| Positions | Numbered slots | Counting end and total slots |
| Person-to-item assignment | Table | Whether items are unique and used exactly once |
| Several possible cases | Separate small tables | Which facts each case satisfies |

**One-to-one assignment — ஒவ்வொருவருக்கும் தனித்தனி ஒன்று:** every person gets exactly one item and every item goes to exactly one person. Use that property **only when given**. Merely knowing a person's choice does not forbid another person from choosing the same item.

**Contradiction — முரண்பாடு:** a case violates a supplied condition. **Elimination — நீக்குதல்:** removing a case because it violates a condition, not because it looks unusual.

### 5.2 A repeatable checking routine

1. List the people/items and the target.
2. Write each condition separately; mark **not, only, exactly, immediately**.
3. Place definite facts first.
4. Carry out deductions that follow from the stated constraints.
5. When more than one case remains, keep the cases separate.
6. Recheck the completed answer against **every** condition.

> **Quick rule:** One valid case proves **possible**. It does not prove **must be true**. One valid counterexample is enough to disprove “must be true.” A case that breaks a condition proves nothing about the permitted possibilities.

**Counterexample — மறுக்கும் எடுத்துக்காட்டு:** a valid case where a proposed necessary claim is false. A contradiction in the input is different from insufficient information: contradictory rules allow **no** valid case; incomplete rules may allow **several**.

### 5.3 Five worked models

**T1. A, B and C each take one different fruit: apple, banana or orange. A takes apple; B does not take banana. Find all assignments.**

1. A uses apple. Because every fruit is used exactly once, B and C must use banana and orange.
2. B cannot use banana, so B takes orange.
3. **Answer: A–apple, B–orange, C–banana.** Check every row and column:

| Person | Apple | Banana | Orange |
|---|---|---|---|
| A | Yes | No | No |
| B | No | No | Yes |
| C | No | Yes | No |

Each row has one Yes, each column one Yes, and B is not assigned banana.

**T2. A chooses apple. B does not choose banana. Each chooses apple, banana or orange; sharing a choice is allowed. Must B choose orange?**

1. The choices are not required to be different.
2. B may choose apple or orange; both obey “not banana.”
3. **Answer: No; B's exact choice is not determined.** Check: importing the one-to-one condition from T1 would remove a valid option without evidence.

**T3. Place A, B and C in three distinct slots numbered left to right. A must be left of B; C must be right of B. Find the order.**

1. First condition gives A before B.
2. Second gives B before C. With only these three people, the complete order is A–B–C.
3. **Answer: A, B, C.** Check: positions 1, 2, 3 satisfy both conditions. With extra people, these facts would not necessarily imply immediate adjacency.

**T4. Place A, B and C in three distinct slots. The only condition is A left of B. Must C be last?**

1. List valid orders: A–B–C, A–C–B and C–A–B.
2. C is last in one case, middle in one and first in one.
3. **Answer: No; C can occupy any position.** Check: A remains left of B in all three. The first valid order is not automatically the unique answer.

**T5. A must sit left of B in a single row of distinct positions. A must also sit right of B. Can both conditions hold?**

1. Left of B requires A's left-counted position to be smaller than B's.
2. Right of B requires it to be larger than B's at the same time.
3. **Answer: No valid arrangement; the conditions contradict each other.** Check: this is not merely an unknown order. If copied from a source, recheck the exact wording before inventing a solution.

## 6. ✍️ Independent practice — 25 questions

Answer before reading Section 7. Give a short reason or diagram. Unless otherwise stated, rows have distinct positions, comparisons use the same scale, and turns are 90°.

### A. Instructions

1. All are odd EXCEPT: 7, 11, 18, 23. Which one?
2. Only trained workers may operate a machine. Nila is permitted to operate it under this rule. Must Nila be trained? Does the rule guarantee that every trained worker is permitted?
3. Which count satisfies **at least 3 and fewer than 5**: 2 / 3 / 5 / 6? Also list all allowed whole-number counts.
4. “Not both A and B are selected.” Is selecting neither allowed by this condition alone? Is selecting both allowed?
5. At most 2 of four lamps are on. No other restriction is given. Which counts are possible?

### B. Directions

6. Facing west, you turn right. New direction?
7. Facing north, you turn left, then left again. New direction?
8. Walk 5 m east, 2 m north, then 5 m west, facing along each walk. Give final location relative to the start, total path length and final facing.
9. You face east and turn 180°. Which way do you face? Has turning alone changed your position?
10. A person faces south. Their bag is immediately to their left. Which compass direction is the bag from the person?

### C. Family

11. A is B's mother; B is C's father. How is A related to C?
12. P is Q's sister. Does this tell you Q is male or female?
13. R is S's father. S is T's sister. Under the stated full-sibling convention, how is R related to T?
14. U is V's child; V is W's son. How is U related to W? Can you select grandson or granddaughter uniquely?
15. My father's sister has a son. How is he related to me?

### D. Comparisons and ranks

16. A is shorter than B; B is shorter than C. Who is tallest among them?
17. P is older than Q; R is younger than Q. Write oldest to youngest.
18. A student is 7th from the top in a 25-student list with no ties. Rank from the bottom?
19. A and B are 4th and 10th from the left in the same row. How many people stand strictly between them?
20. X is taller than Y; Z is taller than Y. Must X be taller than Z?

### E. Tables and conditions

21. A, B, C each receive one different pen: red, blue, green. B gets blue; A does not get red. Find everyone's colour.
22. A and B each choose red or blue. Sharing is allowed. A chooses red. Must B choose blue?
23. Three people L, M, N occupy three distinct slots from left to right. M is immediately right of L; N is left of L. Find the order.
24. Three people A, B, C occupy three distinct slots. Only A left of B is required. Can C be in the middle? Give a valid order.
25. A person is described as having **exactly two children** and **at least three children**, referring to the same family at the same time. Is this insufficient information or contradictory information?

## 7. ✅ Explained answers

| Q | Answer | Reason / check |
|---|---|---|
| 1 | 18 | It is even; EXCEPT requests the item outside the odd-number group. |
| 2 | Nila must be trained; no guarantee for every trained worker | Permitted operator → trained worker. The reverse implication was not supplied. |
| 3 | Option 3; allowed counts 3 and 4 | Lower bound includes 3; “fewer than 5” excludes 5. |
| 4 | Neither: allowed. Both: forbidden. | Not both excludes the two-at-once case; it does not require either one. |
| 5 | 0, 1 or 2 | An upper bound alone does not require any lamp to be on. |
| 6 | North | Clockwise quarter-turn W → N. |
| 7 | South | N → W → S. |
| 8 | 2 m north; 12 m travelled; facing west | East/west movements cancel; 5 + 2 + 5 = 12. Last movement is west. |
| 9 | West; position unchanged | Half-turn E → W; turning is not movement. |
| 10 | East | A south-facing person's left is east. |
| 11 | Paternal grandmother | A is the mother of C's father B. |
| 12 | Neither is determined | Sister identifies P as female, not Q. |
| 13 | Father | S and T are full siblings in these models, so R is their father. |
| 14 | Grandchild; gender not determined | U is W's child's child. U's gender is not supplied. |
| 15 | Cousin | Child of a parent's sibling. |
| 16 | C | Convert to taller-first: C > B > A. |
| 17 | P, Q, R | P > Q and Q > R on the age scale. |
| 18 | 19th | 25 − 7 + 1 = 19. Check: 6 above + 1 student + 18 below = 25. |
| 19 | 5 | 10 − 4 − 1 = 5; positions 5 through 9. |
| 20 | No; cannot determine the comparison | X > Z > Y and Z > X > Y are both possible, as is X = Z > Y. |
| 21 | A–green, B–blue, C–red | Blue is used; A cannot take red, so A takes green; C takes the remaining red. |
| 22 | No | B may also choose red because uniqueness was not required. |
| 23 | N, L, M | L–M must be adjacent in that order, with N before L. |
| 24 | Yes: A, C, B | A is still left of B; the condition does not require adjacency. |
| 25 | Contradictory | No one count is simultaneously exactly 2 and at least 3. |

**Short checkpoint:** Explain these five distinctions without the notes: **at least / at most; facing / location; sibling's gender / own gender; possible / must; missing information / contradiction**. A memorised answer without the reason is a sign to revisit that section.

## 8. 🔁 Revision, error log and Foundation Record

### 8.1 Compact revision map

```text
Read the target and instruction words
                 ↓
List only the supplied facts
                 ↓
Choose a compass, tree, chain, slots or table
                 ↓
Apply each condition without adding assumptions
                 ↓
Keep all remaining valid cases
                 ↓
Is the target true in all, some or none of those cases?
                 ↓
Check the final answer against EVERY condition
```

| Topic | Remember | Stop this mistake |
|---|---|---|
| Only A are B | B → A | Reversing the implication |
| Neither A nor B | Exclude both A and B | Reading it as “not both” |
| At least / at most | Lower / upper inclusive bound | Dropping the boundary or assuming zero is forbidden |
| Left/right | Use the person's facing or stated viewpoint | Using page-left for every person |
| Path | Track position separately from facing | Calling the final facing the final location |
| Family | Track relationship direction, generation and gender clues | Guessing gender from a name |
| Comparison | One labelled scale; only justified links | Ranking two people just because both exceed a third |
| Both-end rank | Same person: total = ranks summed − 1 | Double-counting the person |
| Table | Use uniqueness only if stated | Assuming all choices must differ |
| Must / possible | Every valid case / at least one valid case | Treating the first valid case as the only case |

### 8.2 Error log

| Date / question | Exact word or condition missed | My incorrect assumption | Correct method | Fresh unaided retry |
|---|---|---|---|---|
| Example: I4 | At least 2, at most 3 | “At most 3 means exactly 3” | Keep both 2 and 3 | __ |
| Your entry | __ | __ | __ | __ |

For actual PYQs, add **exam/year/shift/question ID or book/page**, the exact options, key source/version and your explanation source. Do not treat a teacher's proposed explanation as an official derivation unless it is published as such.

### 8.3 Foundation Record

> 📊 **Foundation Record:** Easy: `__/__` | 7-Day Review: `__` | 21-Day Review: `__` | Next Repair: `__`

| Skill | Fresh unaided result | Mistake / repair | Day 7 | Day 21 |
|---|---|---|---|---|
| Instructions and qualifiers | __ / __ | __ | __ | __ |
| Directions and turns | __ / __ | __ | __ | __ |
| Family and gender clues | __ / __ | __ | __ | __ |
| Comparisons and ranks | __ / __ | __ | __ | __ |
| Tables and condition checking | __ / __ | __ | __ | __ |

Follow your [master plan's existing gates](../../Plan/FINAL-PLAN-NOV2026-MAY2027.md): **at least 70% on fresh basics unaided** before harder dependent work. On a 25-question set, **18/25 = 72%** clears that numerical starting gate; **17/25 = 68%** does not. Check each skill too: a good total does not repair a persistent directions or instruction-reading gap.

For the plan's **Green** status, **80%+ timed performance alone is insufficient**: also complete the two clean unaided retention re-solves and Day 7/Day 21 reviews. Use existing study slots; these notes do not add another timetable. Mark assisted answers honestly and use fresh questions after reading this answer key.

> **தமிழில்:** தகவல் இல்லாத இடத்தை ஊகத்தால் நிரப்ப வேண்டாம். ஒரு விடை சாத்தியம் என்பதும் அதுவே கட்டாய விடை என்பதும் வேறு. எல்லா நிபந்தனைகளையும் சரிபார்த்த பிறகே முடிவு செய்யுங்கள்.

- [ ] I can explain not, except, only, neither, at least and at most.
- [ ] I can follow left/right turns from every main compass direction.
- [ ] I can separate facing, path length and final position.
- [ ] I can draw family links and leave unknown gender marked unknown.
- [ ] I can build comparison chains and calculate ranks without mixing ends.
- [ ] I can check a table or arrangement against every condition.
- [ ] I can distinguish possible, necessary, undetermined and contradictory cases.

**Next:** Use these habits in [R01 — Analogy](01-R01-Analogy.md), then follow the chapter order in your current plan. Return to the specific foundation skill whenever a chapter mistake exposes a gap.
