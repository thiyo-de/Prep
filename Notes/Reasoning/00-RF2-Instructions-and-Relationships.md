# 🧭 RF2 — Reasoning Basics: Instructions and Relationships
### வழிமுறைகள் மற்றும் உறவுகள் | Foundation Module 02

> 🎯 **Mastery Target:** Master rigorous instruction parsing (`not`, `only`, `neither/nor`, `at least`, `at most`), 8-point compass navigation & angular turns, generational family tree modeling with strict gender validation, transitive inequality scales & dual-end rank formulas ($L + R = N + 1$), and constraint elimination grids.
> ⏱️ **Target Speed & Accuracy:** $\le 30\text{ sec / question}$ | $\ge 80\%$ First-Attempt Accuracy.
> 📌 **Prerequisite:** [RF1 — Letters and Numbers](00-RF1-Letters-and-Numbers.md).

---

### 🗺️ Module Architecture & Roadmap

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│             RF2: INSTRUCTION LOGIC & RELATIONAL REASONING                   │
├───────────────┬───────────────┬───────────────┬───────────────┬─────────────┤
│   PILLAR 1    │   PILLAR 2    │   PILLAR 3    │   PILLAR 4    │  PILLAR 5   │
│  Instruction  │ Compass Turns │ Family Trees  │ Comparisons & │ Constraint  │
│  & Qualifiers │  & Navigation │  & Gender     │ Dual Ranks    │ Grids/Logic │
│  (I1–I5)      │   (D1–D5)     │   (F1–F5)     │   (C1–C5)     │  (T1–T5)    │
└───────────────┴───────────────┴───────────────┴───────────────┴─────────────┘
```

| Route Stage | Focus Area | Core Objective | Passing Gate |
| :---: | :--- | :--- | :---: |
| **Stage 1** | **Instruction Parsing & Compass Turns** | Master `not`, `only`, `neither/nor`, `at least/most`, and 8-point facing vs. displacement | $\ge 80\%$ |
| **Stage 2** | **Family Trees & Generational Logic** | Distinguish gender clues, generational tiers, and avoid assuming gender from names | $\ge 80\%$ |
| **Stage 3** | **Rank Formulas & Constraint Grids** | Apply $L+R = N+1$, strict transitivity ($A>B>C$), and tabular elimination grids | $\ge 80\%$ |
| **Stage 4** | **Speed Drills & Retention Retests** | Complete 25 diagnostic challenges, Day 7/21 spaced review, and oral checkpoints | 20/25 ($\ge 80\%$) |

> ℹ️ **Pedagogical Note:** The 25 worked models and 25 independent questions are original structured drills designed to build rigorous deductive habits. Questions with insufficient information deliberately train you to recognize epistemic limits without jumping to speculative assumptions.

---

## 1. 📖 Read the Instruction Before Solving

### 1.1 Three Fundamental Components of a Reasoning Problem

Every reasoning question consists of three non-negotiable structural elements:
1. **Given Facts (தரவுகள்):** Information explicitly provided and accepted as ground truth for the question.
2. **Conditions & Constraints (நிபந்தனைகள் / கட்டுப்பாடுகள்):** Boundary conditions and exclusionary rules that every valid scenario must obey.
3. **Target Objective (கேள்வியின் இலக்கு):** The specific property, value, or relationship you are asked to determine.

```text
   ┌─────────────────────────────────────────────────────────────┐
   │ GIVEN FACTS       → Accept strictly as true                 │
   │ CONDITIONS        → Filter out violating possibilities      │
   │ TARGET OBJECTIVE  → Answer ONLY what is specifically asked  │
   └─────────────────────────────────────────────────────────────┘
```

| Analytical Term | Tamil Support | Operational Definition |
| :--- | :--- | :--- |
| **Statement** | கூற்று | An explicit claim supplied in the problem premises. |
| **Condition / Constraint** | நிபந்தனை / கட்டுப்பாடு | A binding rule restricting valid configurations. |
| **Conclusion** | முடிவு | A deduction that must logically follow from the given premises. |
| **Assumption** | ஊகம் | An unstated belief introduced without textual proof. *(Strictly Forbidden)* |
| **Definite / Necessary** | உறுதியான / கட்டாயமான | True in **every** permitted configuration without exception. |
| **Possible** | சாத்தியமான | True in **at least one** valid configuration. |
| **Impossible / Contradictory** | சாத்தியமற்ற / முரண்பாடு | Permitted in **zero** configurations; violates one or more rules. |
| **Insufficient Information** | போதுமான தகவல் இல்லை | Premises allow multiple conflicting outcomes; target cannot be determined. |

---

### 1.2 Essential Logical Operators and Boundary Qualifiers

| Operational Wording | Formal Meaning | Concrete Mathematical / Positional Rule |
| :--- | :--- | :--- |
| **`Not`** | Strict negation | Negates stated property. For integers, "Not even" $\implies$ odd. |
| **`Except`** | Set complement | Identifies the single element outside the described classification. |
| **`Only A are B`** | Reverse implication ($B \implies A$) | Every $B$ must belong to set $A$. (Does NOT guarantee every $A$ is $B$). |
| **`Neither A nor B`** | Joint exclusion ($\neg A \land \neg B$) | Excludes both $A$ and $B$ simultaneously ($0$ of either). |
| **`At least` $k$** | Inclusive lower bound | $\text{Count} \ge k$ ($k, k+1, k+2, \dots$ up to max allowed). |
| **`At most` $k$** | Inclusive upper bound | $\text{Count} \le k$ ($0, 1, \dots, k$ unless $0$ is separately prohibited). |
| **`Exactly` $k$** | Singleton constraint | $\text{Count} = k$ (strictly $k$; neither more nor less). |
| **`More than` $k$** | Strict lower inequality | $\text{Count} > k$ ($k+1, k+2, \dots$). Boundary $k$ is excluded! |
| **`Fewer than` $k$** | Strict upper inequality | $\text{Count} < k$ ($0, 1, \dots, k-1$). Boundary $k$ is excluded! |
| **`Immediately`** | Direct adjacency ($\Delta = 1$) | Zero intervening items/positions. Immediately left = direct neighbor. |

> [!IMPORTANT]
> **Boundary Precision:**
> - "At least $k$" **includes** $k$. "More than $k$" **excludes** $k$.
> - "At most $k$" **includes** $k$. "Fewer than $k$" **excludes** $k$.
> - For non-negative integers: $\text{Not at least } 3 \iff \le 2$. $\text{Not at most } 3 \iff \ge 4$.
> - Negating "exactly 3" means $\ne 3$ (either $<3$ or $>3$), NOT merely $>3$!

---

### 1.3 Implication Direction: The "Only" vs. "All" Trap

```text
Statement: "Only ticket holders may enter."

Allowed Entrant ─────(Necessary Condition)─────► Has a Ticket
Has a Ticket    ───x (NOT Sufficient) x────────► Guaranteed Entry
```

1. **Direction of `Only`:** "Only $A$ are $B$" establishes $B \implies A$. Having property $A$ is **necessary** (தேவையானது), but not necessarily **sufficient** (போதுமானது).
2. **Direction of `All`:** "All $A$ are $B$" establishes $A \implies B$.
3. **Neither/Nor vs. Not Both:**
   - **`Neither A nor B`**: Excludes both. ($\text{Tea}=0, \text{Coffee}=0$).
   - **`Not both A and B`**: Excludes only the simultaneous case. ($\text{Tea only}$, $\text{Coffee only}$, or $\text{Neither}$ are all valid!).

<!-- separate learning boxes -->

> **தமிழில்:** “குறைந்தது” (At least) என்பது அதையும் அதற்கு மேலான எண்ணிக்கைகளையும் குறிக்கும். “அதிகபட்சம்” (At most) என்பது அதையும் அதற்குக் கீழான எண்ணிக்கைகளையும் குறிக்கும். “Only A are B” என்றால் B ஆக இருப்பவர் கண்டிப்பாக A ஆக இருக்க வேண்டும்; ஆனால் A ஆக இருக்கும் அனைவரும் B ஆக இருக்க வேண்டிய கட்டாயமில்லை.

---

### 1.4 Five Worked Analytical Models (I1–I5)

| Model ID | Given Prompt & Conditions | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **I1**<br>`Except` | **All the following are even EXCEPT: 12, 18, 21, 30.** | 1. Identify target keyword: **EXCEPT** requests the element that violates even parity.<br>2. Test parity: $12=2\times 6$, $18=2\times 9$, $30=2\times 15$ (all even).<br>3. $21=2\times 10 + 1$ (odd). | **Selection:** **21**<br><br>✓ **Trap Check:** Selecting 18 satisfies the group property rather than finding the exception! |
| **I2**<br>`Only Rule` | **Only members may enter a room. Leela is allowed to enter under this rule. Must she be a member? Does every member necessarily enter?** | 1. Formal rule: $\text{Allowed Entrant} \implies \text{Member}$.<br>2. Premise: Leela is an allowed entrant $\implies$ Leela must be a member.<br>3. Converse test: $\text{Member} \centernot\implies \text{Allowed Entrant}$ (rule specifies entry condition, not mandatory presence). | **Selection:** **Leela must be a member; no guarantee that every member enters.**<br><br>✓ **Trap Check:** Never reverse conditional arrows! |
| **I3**<br>`Neither/Nor` | **Ravi chooses neither tea nor coffee. Which option obeys this: tea only, coffee only, both, or water only?** | 1. "Neither $A$ nor $B$" excludes $A$ and excludes $B$.<br>2. Eliminate: Tea only ($\times$), Coffee only ($\times$), Both ($\times$).<br>3. Water only violates neither exclusion constraint. | **Selection:** **Water only**<br><br>✓ **Trap Check:** Proves water is compatible, not that all tea-rejecters must drink water. |
| **I4**<br>`Dual Bounds` | **Select at least 2 and at most 3 people from four people. Which selection sizes are allowed?** | 1. Condition 1 (At least 2): $\text{Size} \in \{2, 3, 4\}$.<br>2. Condition 2 (At most 3): $\text{Size} \in \{0, 1, 2, 3\}$.<br>3. Intersection of valid counts: $\{2, 3, 4\} \cap \{0, 1, 2, 3\} = \{2, 3\}$. | **Selection:** **2 or 3 people**<br><br>✓ **Trap Check:** 2 and 3 are both included; this asks for group sizes, not identities. |
| **I5**<br>`Modal Logic` | **A box contains exactly one red OR one blue ball; its colour is not stated. Is “the ball is red” definitely true, possible or impossible?** | 1. Construct case space: Case 1 = Red, Case 2 = Blue.<br>2. Evaluate proposition: True in Case 1, False in Case 2.<br>3. Since it is true in at least one valid case but false in another, it is possible. | **Selection:** **Possible, but not definitely true.**<br><br>✓ **Trap Check:** Lack of proof for Red does not prove Blue! |

---

## 2. 🧭 Left/Right, Compass Directions and Angular Turns

### 2.1 The Observer Frame: Fixing Viewpoints

In spatial reasoning, **Left and Right are defined strictly relative to the observer's facing direction**, NOT the page margins.
On standard two-dimensional map coordinates, North is vertically upward ($\uparrow$) and East is to the right ($\rightarrow$).

```text
                          North (N) — வடக்கு
                               ↑ [0° / 360°]
            North-West (NW)    │    North-East (NE)
                [315°]         │        [45°]
                               │
West (W) ──────────────────────┼────────────────────── East (E)
 [270°] — மேற்கு               │               — கிழக்கு [90°]
                               │
            South-West (SW)    │    South-East (SE)
                [225°]         │        [135°]
                               ↓ [180°]
                          South (S) — தெற்கு
```

| Facing Direction | Person's Left (90° ACW) | Person's Right (90° CW) | Directly Behind (180°) |
| :---: | :---: | :---: | :---: |
| **North ($\uparrow$)** | **West ($\leftarrow$)** | **East ($\rightarrow$)** | **South ($\downarrow$)** |
| **East ($\rightarrow$)** | **North ($\uparrow$)** | **South ($\downarrow$)** | **West ($\leftarrow$)** |
| **South ($\downarrow$)** | **East ($\rightarrow$)** | **West ($\leftarrow$)** | **North ($\uparrow$)** |
| **West ($\leftarrow$)** | **South ($\downarrow$)** | **North ($\uparrow$)** | **East ($\rightarrow$)** |

> [!NOTE]
> **Turn Dynamics:**
> - **Clockwise (CW / கடிகாரத் திசை):** $\text{N} \to \text{E} \to \text{S} \to \text{W} \to \text{N}$. A right turn is $+90^\circ$ CW.
> - **Anticlockwise (ACW / எதிர்கடிகாரத் திசை):** $\text{N} \to \text{W} \to \text{S} \to \text{E} \to \text{N}$. A left turn is $-90^\circ$ (or $+270^\circ$) ACW.
> - **Quarter-Turn:** $90^\circ$ | **Half-Turn:** $180^\circ$ (opposite direction) | **Full Turn:** $360^\circ$ (restores initial facing).

---

### 2.2 Dual Record-Keeping: Facing vs. Spatial Position

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. FACING VECTOR: Which direction the observer's eyes/body point.           │
│ 2. POSITION VECTOR: Cartesian displacement (x, y) relative to origin (0, 0).│
└─────────────────────────────────────────────────────────────────────────────┘
```

- **Turning in place** alters the **Facing Vector**, but leaves spatial position **completely unchanged** ($\Delta x=0, \Delta y=0$).
- **Walking** alters the **Position Vector**.
- **Distance Travelled:** Scalar sum of all path segments ($d_1 + d_2 + \dots$).
- **Displacement / Final Direction from Start:** Net vector from $(0, 0)$ to $(x_{\text{net}}, y_{\text{net}})$.

<!-- separate learning boxes -->

> **தமிழில்:** ஒருவர் தெற்கு நோக்கி நின்றால் அவருடைய இடப்பக்கம் கிழக்கு, வலப்பக்கம் மேற்கு ஆகும். இடத்திலேயே திரும்புவது (Turning) முகத்தின் திசையை மட்டுமே மாற்றும், நிற்கும் இடத்தை மாற்றாது. தொடக்க இடத்திலிருந்து இருக்கும் திசையும், கடைசியாக முகம் நோக்கும் திசையும் வெவ்வேறானவை.

---

### 2.3 Five Worked Analytical Models (D1–D5)

| Model ID | Given Movement / Scenario | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **D1**<br>`Quarter Turn` | **You face north and turn right by 90°. Which way do you face?** | 1. Initial vector: $\text{North} = 0^\circ$.<br>2. Right turn $= +90^\circ$ CW.<br>3. $0^\circ + 90^\circ = 90^\circ = \text{East}$. | **Selection:** **East**<br><br>✓ **Trap Check:** Pure rotation; spatial coordinates remain $(0, 0)$. |
| **D2**<br>`South Turn` | **You face south and turn left by 90°. Which way do you face?** | 1. Initial vector: $\text{South} = 180^\circ$.<br>2. Left turn $= -90^\circ$ ACW (or $+270^\circ$ CW).<br>3. $180^\circ - 90^\circ = 90^\circ = \text{East}$. | **Selection:** **East**<br><br>✓ **Trap Check:** Do not use page-left! A south-facing observer's left is East. |
| **D3**<br>`Sequential Turns` | **Starting east, turn left, right, then right; each turn is 90°. Final facing?** | 1. Start East ($90^\circ$).<br>2. Turn 1 (Left): $90^\circ - 90^\circ = 0^\circ$ (North).<br>3. Turn 2 (Right): $0^\circ + 90^\circ = 90^\circ$ (East).<br>4. Turn 3 (Right): $90^\circ + 90^\circ = 180^\circ$ (South). | **Selection:** **South**<br><br>✓ **Trap Check:** Net turn: $-90^\circ + 90^\circ + 90^\circ = +90^\circ$ CW from East $\to$ South. |
| **D4**<br>`Path & Vector` | **Walk 4 m north, 3 m east, then 4 m south, facing the direction of each walk. Where are you from start, how far did you walk, and where do you face?** | 1. Vector sum: $\Delta y = +4 - 4 = 0\text{ m}$; $\Delta x = +3\text{ m}$. Net position: $3\text{ m}$ East.<br>2. Total distance: $4 + 3 + 4 = 11\text{ m}$.<br>3. Final facing corresponds to last walk: South. | **Selection:** **3 m East of start; 11 m walked; facing South.**<br><br>✓ **Trap Check:** Final facing (South) is completely independent of location relative to start (East)! |
| **D5**<br>`Relative vs. Absolute`| **A person makes two consecutive 90° right turns. Initial facing is unknown. What absolute compass direction do they face?** | 1. Two right turns: $+90^\circ + 90^\circ = +180^\circ$.<br>2. A $180^\circ$ rotation produces the exact polar opposite facing.<br>3. Without knowing the reference origin, the absolute direction cannot be fixed. | **Selection:** **Absolute direction cannot be determined; it is directly opposite the starting direction.**<br><br>✓ **Trap Check:** Relative shift ($180^\circ$) is known; absolute vector is undetermined. |

> [!CAUTION]
> **Row vs. Seating Facing Traps:**
> In horizontal row problems, "left/right" defaults to standard page-reading order unless an observer's facing direction is explicitly declared. In circular or face-to-face seating arrangements, you MUST assign left and right according to whether each individual faces inward (center) or outward!

## 3. 👪 Family Terms, Generations and Gender Clues

### 3.1 Directed Relationship Vectors: Subject vs. Reference

> [!IMPORTANT]
> **The Vector Direction Rule:**
> "A is the father of B" defines the vector $\text{A} \xrightarrow{\text{father of}} \text{B}$.
> When asked: *"How is B related to A?"*, the required target is **B's reciprocal identity**, NOT A's role!
> You cannot answer "Father" — the answer must be **Son**, **Daughter**, or **Child** (if B's gender is unknown).

| Kinship Term | Tamil Support | Generational Level ($\Delta G$) | Analytical Definition & Structural Scope |
| :--- | :--- | :---: | :--- |
| **Parent** | பெற்றோர் | $+1$ | Father or Mother; gender unspecified by "parent" alone. |
| **Child** | பிள்ளை | $-1$ | Son or Daughter; gender unspecified by "child" alone. |
| **Father / Mother** | தந்தை / தாய் | $+1$ | Male parent / Female parent. |
| **Son / Daughter** | மகன் / மகள் | $-1$ | Male child / Female child. |
| **Brother / Sister** | சகோதரன் / சகோதரி | $0$ | Male full-sibling / Female full-sibling. |
| **Spouse** | வாழ்க்கைத்துணை | $0$ | Married partner; gender unspecified by "spouse" alone. |
| **Grandfather / Grandmother** | தாத்தா / பாட்டி | $+2$ | Parent's father / Parent's mother. |
| **Grandchild** | பேரப்பிள்ளை | $-2$ | Child's child; gender unspecified by "grandchild" alone. |
| **Maternal** | தாய்வழி | — | Lineage traced through the **Mother** ($\text{Mother's Side}$). |
| **Paternal** | தந்தைவழி | — | Lineage traced through the **Father** ($\text{Father's Side}$). |
| **Uncle / Aunt** | மாமா, சித்தப்பா, பெரியப்பா / அத்தை, சித்தி, பெரியம்மா | $+1$ | Parent's brother / Parent's sister (blood relations). |
| **Nephew / Niece** | உடன்பிறந்தவரின் மகன் / மகள் | $-1$ | Sibling's son / Sibling's daughter. |
| **Cousin** | ஒன்றுவிட்ட சகோதரன் / சகோதரி | $0$ | Child of a parent's sibling. Gender unspecified by "cousin" alone. |

> 💡 **Tamil vs. English Lexical Distinction:**
> Tamil uses distinct specific terms where English groups relatives together:
> - **Mother's brother:** தாய்மாமா (Maternal Uncle)
> - **Father's sister:** அத்தை (Paternal Aunt)
> - **Father's younger brother:** சித்தப்பா | **Father's elder brother:** பெரியப்பா
> When solving English exams, always trace the full explicit relational path ($\text{Person} \to \text{Parent} \to \text{Sibling} \dots$) to prevent ambiguity.

---

### 3.2 Family Tree Architecture and Generation Tiers

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       3-TIER GENERATION HIERARCHY                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ Level +2 (Grandparents):      Arun [M] ────── Spouse ────── [F]             │
│                                           │                                 │
│ Level +1 (Parents):                     Bela [F] ──── Spouse ─── [M]        │
│                                                    │                        │
│ Level  0 (Ego / Children):                       Charu [?]                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ Legend:  Vertical (│) = Parent → Child  │  Horizontal (─) = Siblings/Spouse │
│          [M] = Definite Male  │  [F] = Definite Female  │  [?] = Unknown    │
└─────────────────────────────────────────────────────────────────────────────┘
```

1. **Generational Levels ($\Delta G$):**
   - Parents are strictly $+1$ level above children.
   - Grandparents are strictly $+2$ levels above grandchildren.
   - Siblings and first cousins share Generation $0$ ($\Delta G = 0$).
   - *Generation is NOT chronological age:* An uncle can occasionally be younger in years than a nephew, but hierarchically he remains at $\Delta G = +1$.
2. **Standard Problem Conventions:**
   - Brother/sister relations denote **full siblings** unless half-sibling, step, or adoption context is given.
   - Shared parentage must be explicitly stated; two adults having a common child does not automatically imply marriage unless specified.

<!-- separate learning boxes -->

> **தமிழில்:** இரத்த உறவு கேள்விகளில் தலைமுறைகளை (Generations) மேலிருந்து கீழாக அடுக்க வேண்டும். பெயர்களை வைத்து பாலினத்தை (Gender) நீங்களாகவே முடிவு செய்யக்கூடாது. "B-யின் சகோதரன் A" என்றால் A-யின் பாலினம் மட்டுமே ஆண்; B-யின் பாலினம் ஆணா பெண்ணா என்பது தெரியாது.

---

### 3.3 Five Worked Analytical Models (F1–F5)

| Model ID | Kinship Premises | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **F1**<br>`Two-Tier Ascendant` | **Arun is Bela's father. Bela is Charu's mother. How is Arun related to Charu?** | 1. Construct vector path: $\text{Arun (M)} \xrightarrow{\text{father}} \text{Bela (F)} \xrightarrow{\text{mother}} \text{Charu (?)}$.<br>2. Arun is at $+2$ generation tier through Charu's mother Bela.<br>3. Relational designation: Maternal grandfather. | **Selection:** **Maternal grandfather**<br><br>✓ **Trap Check:** Charu's unknown gender does not affect Arun's relationship to Charu! |
| **F2**<br>`Sibling to Child` | **Asha is Bala's sister. Bala is Chitra's father. How is Asha related to Chitra?** | 1. Construct path: $\text{Asha (F)} \xleftrightarrow{\text{sister}} \text{Bala (M)} \xrightarrow{\text{father}} \text{Chitra (?)}$.<br>2. Asha is the sister of Chitra's father ($\Delta G = +1$).<br>3. Relational designation: Paternal aunt. | **Selection:** **Paternal aunt**<br><br>✓ **Trap Check:** Asha is $+1$ generation above Chitra; never mistake an aunt for a sister! |
| **F3**<br>`Cousin Lineage` | **My mother's brother has a daughter, Meena. How is Meena related to me?** | 1. Construct path: $\text{Me} \xrightarrow{\text{mother}} \text{Mother} \xleftrightarrow{\text{brother}} \text{Uncle} \xrightarrow{\text{daughter}} \text{Meena (F)}$.<br>2. Meena is the daughter of a parent's sibling ($\Delta G = 0$).<br>3. Relational designation: Cousin. | **Selection:** **Cousin**<br><br>✓ **Trap Check:** Sharing generation tier $0$ does NOT make her a sister; parents are different! |
| **F4**<br>`Missing Parent Gender`| **A is B's brother. B is C's parent. How is A related to C? Can we say maternal or paternal?** | 1. Construct path: $\text{A (M)} \xleftrightarrow{\text{brother}} \text{B (?)} \xrightarrow{\text{parent}} \text{C (?)}$.<br>2. A is a male sibling of C's parent ($\Delta G = +1$), confirming Uncle.<br>3. B's gender is unknown; B could be father (paternal) or mother (maternal). | **Selection:** **Uncle; maternal or paternal side cannot be determined.**<br><br>✓ **Trap Check:** Do not assume B is a father without textual evidence. |
| **F5**<br>`Missing Child Gender` | **P is Q's child. Q is R's sister. Is P R's nephew or niece?** | 1. Construct path: $\text{R (?)} \xleftrightarrow{\text{sister}} \text{Q (F)} \xrightarrow{\text{parent}} \text{P (?)}$.<br>2. P is the child of R's sister ($\Delta G = -1$).<br>3. P's gender is completely unspecified by the label "child". | **Selection:** **P is R's sibling's child; nephew vs. niece cannot be determined.**<br><br>✓ **Trap Check:** Names or letter variables carry ZERO gender evidence! |

> [!CAUTION]
> **The Two Classic Blood-Relation Traps:**
> 1. **"A is the brother of B"** $\implies$ $A$ is strictly male ($[M]$), but $B$'s gender remains entirely unknown ($[?]$) until another clue proves it.
> 2. **"A is the only son of B"** $\implies$ $B$ has exactly one male child ($[M]$), but $B$ can have multiple daughters ($[F]$)! Remember: **Only son $\ne$ Only child!**

---

## 4. 📏 Comparisons, Transitive Chains, and Dual-End Ranks

### 4.1 Constructing Unified Inequality Scales

When comparing attributes (height, weight, age, marks), **align all comparisons on a single unidirectional scale** before making deductions.
Never mix scales (e.g., combining height and age into one expression).

```text
       Older / Taller / Heavier ──────► Younger / Shorter / Lighter
       High End (>)                     Low End (<)
```

1. **Unidirectional Alignment:**
   - "$A$ is shorter than $B$" $\implies B > A$ (on height scale).
   - "$A$ is younger than $B$" $\implies B > A$ (on age scale).
2. **The Transitivity Principle:**
   - If $A > B$ and $B > C$, then $A > B > C \implies A > C$. (Comparison passes cleanly through the intermediate element).
3. **The Common-Reference Non-Transitivity Trap:**
   - If $A > B$ and $C > B$, both $A$ and $C$ exceed $B$.
   - **Does this imply $A > C$? NO!** Permitted orders: $A > C > B$, $C > A > B$, or $A = C > B$. The relative rank of $A$ vs. $C$ is **completely undetermined**.

---

### 4.2 Dual-End Ranking Formulas ($L + R = N + 1$)

When counting a single person's position in an ordered row of $N$ distinct items:

```text
Left End (1) ─────────────► Person P ◄───────────── Right End (N)
              Rank: L                  Rank: R
```

Because counting from the left includes Person $P$, and counting from the right also includes Person $P$, adding the two ranks counts Person $P$ **twice**.

$$L + R = N + 1$$

From this fundamental invariant, we derive:

$$\text{Total Elements } (N) = L + R - 1$$

$$\text{Right Rank } (R) = (N + 1) - L$$

$$\text{Left Rank } (L) = (N + 1) - R$$

#### Elements Strictly Between Two Positions (Same End)
If two people $A$ and $B$ are counted from the **same reference end** with ranks $R_A$ and $R_B$ (where $R_B > R_A$):

$$\text{Elements Strictly Between} = R_B - R_A - 1$$

```text
Example Row (N = 5):
Left (1)  →   [A: 1]    [B: 2]    [C: 3]    [D: 4]    [E: 5]   ← Right (1)
Right (R) →     5         4         3         2         1

For Item C: L = 3, R = 3 → N = 3 + 3 - 1 = 5 items.
Strictly between A (1) and D (4): 4 - 1 - 1 = 2 items (B and C).
```

<!-- separate learning boxes -->

> **தமிழில்:** ஒரு வரிசையில் உள்ள ஒரு நபரின் இடம் இடப்பக்கத்திலிருந்தும் வலப்பக்கத்திலிருந்தும் கொடுக்கப்பட்டால், அந்த நபர் இருமுறை எண்ணப்படுவதால் மொத்த எண்ணிக்கையைக் காண $L + R - 1$ செய்ய வேண்டும். ஒரே முனையிலிருந்து எண்ணப்பட்ட இரண்டு இடங்களுக்கு இடைப்பட்ட நபர்களின் எண்ணிக்கை = (பெரிய இடம் − சிறிய இடம் − 1).

---

### 4.3 Five Worked Analytical Models (C1–C5)

| Model ID | Comparative / Ranking Premises | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **C1**<br>`Transitive Chain` | **A is taller than B. B is taller than C. Who is tallest among these three?** | 1. Convert to unified scale: $A > B$ and $B > C$.<br>2. Chain transitively: $A > B > C$.<br>3. Apex element is $A$. | **Selection:** **A is tallest.**<br><br>✓ **Trap Check:** Valid for these three; does not establish tallest in an unconstrained external group. |
| **C2**<br>`Inverse Phrasing` | **Ravi is younger than Sita. Tara is older than Sita. Who is youngest among them?** | 1. Align on Older $\to$ Younger scale: $\text{Sita} > \text{Ravi}$.<br>2. Second premise: $\text{Tara} > \text{Sita}$.<br>3. Combined transitive chain: $\text{Tara} > \text{Sita} > \text{Ravi}$. Lowest element is Ravi. | **Selection:** **Ravi is youngest.**<br><br>✓ **Trap Check:** Invert "younger than" to standard $>$ inequality before linking! |
| **C3**<br>`Dual-End Total` | **A student is 6th from the top and 9th from the bottom in one list with no ties. How many students are listed?** | 1. Given: $T = 6$, $B = 9$. Both ranks count this same student.<br>2. Apply total formula: $N = T + B - 1 = 6 + 9 - 1 = 14$.<br>3. Partition verification: 5 above $+ 1$ target $+ 8$ below $= 14$. | **Selection:** **14 students**<br><br>✓ **Trap Check:** Adding $6 + 9 = 15$ double-counts the target student! |
| **C4**<br>`Between Elements` | **In a 20-person row, A is 5th from left; B is 8th from right. How many people are between them?** | 1. Total $N = 20$. Convert $B$ to Left rank: $L_B = (20 + 1) - 8 = 13$.<br>2. Now both use Left reference: $L_A = 5, L_B = 13$.<br>3. Apply between formula: $13 - 5 - 1 = 7$ people. | **Selection:** **7 people**<br><br>✓ **Trap Check:** Direct subtraction $8 - 5$ mixes opposing reference ends! |
| **C5**<br>`Common Lower Bound` | **A is older than B. C is older than B. Who is older, A or C?** | 1. Scale representations: $A > B$ and $C > B$.<br>2. Both exceed $B$, but no inequality links $A$ and $C$.<br>3. Permitted cases: $A > C > B$, $C > A > B$, or $A = C$. | **Selection:** **Cannot be determined.**<br><br>✓ **Trap Check:** Having a common younger acquaintance provides zero mutual comparison. |

---

## 5. 🗂️ Simple Tables, Diagrams, and Condition Checking

### 5.1 Choosing the Optimal Problem Representation

| Information Type | Optimal Representation Tool | Critical Features to Explicitly Label |
| :--- | :--- | :--- |
| **Facing & Movement Paths** | Compass axes + 2D Vector Path | Initial facing, turn angles, leg lengths, final displacement. |
| **Family Relationships** | Generational Tree Diagram | Generation levels ($\Delta G$), sibling lines, definite gender $[M]/[F]$. |
| **Comparative Orderings** | Unidirectional Inequality Chain | Consistent direction ($>$), strict vs. weak inequalities. |
| **Positional Rankings** | Linear Numbered Coordinate Slots | Index numbers ($1 \dots N$), reference end (Left vs. Right). |
| **Attribute Matching** | 2D Cross-Grid Matrix (Table) | Checkmarks ($\checkmark$), cross-outs ($\times$), 1-to-1 constraints. |
| **Branching Ambiguities** | Parallel Case Tables | Enumerate Case 1 vs. Case 2 independently; test rules on both. |

> [!IMPORTANT]
> **One-to-One Assignment Principle (தனித்தனி ஒன்று):**
> Every person receives exactly one item, and each item belongs to exactly one person **ONLY IF explicitly stated**!
> Unless a rule demands uniqueness, multiple entities may share the exact same attribute.
> 
> **Contradiction vs. Insufficient Information:**
> - **Contradiction (முரண்பாடு):** Conditions conflict; **Zero** valid configurations exist ($N_{\text{valid}} = 0$).
> - **Insufficient Information (போதுமான தகவல் இல்லை):** Multiple competing configurations exist ($N_{\text{valid}} \ge 2$), leaving the target ambiguous.

---

### 5.2 Six-Step Rigorous Verification Protocol

```text
Step 1: Inventory Entities & Target ──► Identify people, items, and target question
Step 2: Isolate Conditions           ──► Highlight: NOT, ONLY, EXACTLY, IMMEDIATELY
Step 3: Anchor Definite Facts        ──► Place fixed coordinates/links first
Step 4: Execute Deductions           ──► Cross out impossible slots in grid
Step 5: Enumerate Residual Cases     ──► Keep parallel cases separate; do not merge
Step 6: Comprehensive Re-Check       ──► Verify final solution against EVERY premise
```

> ⚡ **The Golden Epistemic Rule:**
> - A single valid scenario proves an outcome is **POSSIBLE**.
> - An outcome is **DEFINITE / MUST BE TRUE** only if it holds across **ALL** valid configurations without exception.
> - A single valid counterexample completely disproves a "Must be true" assertion.

---

### 5.3 Five Worked Analytical Models (T1–T5)

| Model ID | Constraint Premises | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **T1**<br>`1-to-1 Matrix` | **A, B, C each take one different fruit: apple, banana, orange. A takes apple; B does not take banana. Find all assignments.** | 1. 1-to-1 uniqueness is explicit.<br>2. $A = \text{Apple} \implies$ Apple is eliminated for $B$ and $C$.<br>3. $B \ne \text{Banana} \implies B$ must take Orange.<br>4. Remaining fruit for $C$ is Banana. | **Selection:** **A–Apple, B–Orange, C–Banana.**<br><br>✓ **Grid Verification:**<br>$\begin{pmatrix} & \text{Ap} & \text{Ba} & \text{Or} \\ A & \text{Yes} & \text{No} & \text{No} \\ B & \text{No} & \text{No} & \text{Yes} \\ C & \text{No} & \text{Yes} & \text{No} \end{pmatrix}$ |
| **T2**<br>`Non-Unique Selection` | **A chooses apple. B does not choose banana. Choices: apple, banana, orange; sharing allowed. Must B choose orange?** | 1. Sharing is explicitly permitted (no 1-to-1 restriction).<br>2. Condition on $B$: $B \ne \text{Banana}$.<br>3. Permitted options for $B$: Apple OR Orange.<br>4. Since Apple is valid for $B$, $B$ is not forced into Orange. | **Selection:** **No; B's exact choice is not determined (Apple or Orange).**<br><br>✓ **Trap Check:** Never inject 1-to-1 uniqueness unless explicitly mandated! |
| **T3**<br>`Linear Slot Placement`| **Place A, B, C in 3 distinct slots (1, 2, 3 left-to-right). A must be left of B; C must be right of B. Find order.** | 1. Condition 1: $A$ is left of $B \implies \text{Pos}(A) < \text{Pos}(B)$.<br>2. Condition 2: $C$ is right of $B \implies \text{Pos}(B) < \text{Pos}(C)$.<br>3. Combined inequality: $\text{Pos}(A) < \text{Pos}(B) < \text{Pos}(C)$. With 3 slots, order is fixed. | **Selection:** **A, B, C (Slots 1, 2, 3)**<br><br>✓ **Trap Check:** If $>3$ slots were available, this would not guarantee immediate adjacency! |
| **T4**<br>`Multi-Case Exhaustion`| **Place A, B, C in 3 distinct slots. The only condition is A is left of B. Must C be last?** | 1. Constraint: $\text{Pos}(A) < \text{Pos}(B)$.<br>2. Valid permutations:<br>   - Case 1: $A - B - C$ ($C$ is 3rd / last)<br>   - Case 2: $A - C - B$ ($C$ is 2nd / middle)<br>   - Case 3: $C - A - B$ ($C$ is 1st)<br>3. $C$ can occupy any slot. | **Selection:** **No; C can occupy any position (1st, 2nd, or 3rd).**<br><br>✓ **Trap Check:** Do not mistake the first case found for the unique answer! |
| **T5**<br>`Direct Contradiction` | **A must sit left of B in a row of distinct positions. A must also sit right of B. Can both conditions hold?** | 1. Condition 1: $\text{Pos}(A) < \text{Pos}(B)$.<br>2. Condition 2: $\text{Pos}(A) > \text{Pos}(B)$.<br>3. For distinct integer coordinates, $\text{Pos}(A) < \text{Pos}(B)$ and $\text{Pos}(A) > \text{Pos}(B)$ cannot simultaneously hold. | **Selection:** **No valid arrangement; conditions directly contradict each other.**<br><br>✓ **Trap Check:** Contradiction ($0$ cases) is structurally distinct from under-specification ($\ge 2$ cases). |

## 6. ✍️ Independent Practice: 25 Diagnostic Foundation Challenges

> ⏱️ **Solving Protocol:** Attempt all 25 questions independently before checking Section 7. Sketch a quick scratch diagram or chain for every question.
> 🎯 **Passing Standard:** $\ge 20 / 25$ ($80\%$) on first fresh unaided attempt.

<details open>
<summary><b>📂 Set A: Instruction Keywords & Logical Qualifiers (Questions 01–05)</b></summary>

1. **All the following numbers are odd EXCEPT:** `7`, `11`, `18`, `23`. Which one is the exception?
2. **"Only trained workers may operate a machine."** Nila is officially permitted to operate it under this rule.
   - (a) Must Nila be trained?
   - (b) Does the rule guarantee that every trained worker is permitted to operate it?
3. **Which count satisfies "at least 3 and fewer than 5":** `2` / `3` / `5` / `6`? Also list all whole numbers permitted by this boundary condition.
4. **"Not both A and B are selected."**
   - (a) Is selecting *neither* permitted by this condition alone?
   - (b) Is selecting *both* permitted?
5. **At most 2 of four lamps are turned on.** No other restriction is provided. Which counts of turned-on lamps are valid possibilities?

</details>

<details open>
<summary><b>📂 Set B: Directions, Coordinates & Turning Dynamics (Questions 06–10)</b></summary>

6. Facing **West**, you make a **$90^\circ$ right turn**. What is your new facing direction?
7. Facing **North**, you turn **left**, and then turn **left again** (each turn is $90^\circ$). What is your final facing direction?
8. Starting from origin, you walk **5 m East**, then **2 m North**, then **5 m West**, facing along the direction of each walk.
   - (a) What is your final location relative to the start?
   - (b) What is your total path length walked?
   - (c) What is your final facing direction?
9. You face **East** and turn by **$180^\circ$**.
   - (a) Which compass direction do you now face?
   - (b) Has this turning alone altered your spatial position?
10. A person faces **South**. Their bag is placed immediately to their **left**. In which compass direction is the bag located relative to the person?

</details>

<details open>
<summary><b>📂 Set C: Family Trees, Lineage & Gender Constraints (Questions 11–15)</b></summary>

11. **A is B's mother; B is C's father.** How is A related to C?
12. **P is Q's sister.** Does this premise inform you whether Q is male or female?
13. **R is S's father. S is T's sister.** Under the standard full-sibling convention, how is R related to T?
14. **U is V's child; V is W's son.**
    - (a) How is U related to W?
    - (b) Can you uniquely determine whether U is a grandson or granddaughter?
15. **My father's sister has a son.** How is he related to me?

</details>

<details open>
<summary><b>📂 Set D: Comparisons, Transitive Chains & Dual-End Ranks (Questions 16–20)</b></summary>

16. **A is shorter than B; B is shorter than C.** Who is the tallest among them?
17. **P is older than Q; R is younger than Q.** Arrange the three individuals from oldest to youngest.
18. In a 25-student merit list with no ties, **a student ranks 7th from the top**. What is their rank counted from the bottom?
19. In a single row, **A is 4th from the left** and **B is 10th from the left**. How many people stand strictly between A and B?
20. **X is taller than Y; Z is taller than Y.** Must X be taller than Z? Explain why or why not.

</details>

<details open>
<summary><b>📂 Set E: Tables, Grid Constraints & Epistemic Logic (Questions 21–25)</b></summary>

21. **Three people (A, B, C) each receive exactly one different colored pen: red, blue, or green.** B receives the blue pen; A does not receive the red pen. Determine the pen color assigned to each person.
22. **A and B each choose either red or blue.** Sharing a color choice is permitted. A chooses red. Must B choose blue?
23. **Three people (L, M, N) occupy three distinct linear slots from left to right.** M is immediately to the right of L; N is to the left of L. What is the exact left-to-right order?
24. **Three people (A, B, C) occupy three distinct linear slots.** The only condition given is that A sits somewhere to the left of B. Can C occupy the middle slot? If yes, provide a valid arrangement.
25. A family is described as having **"exactly two children"** and **"at least three children"** simultaneously at the present time. Does this scenario represent *insufficient information* or *contradictory information*?

</details>

---

## 7. ✅ Diagnostic Answer Key & Explanatory Matrix

| Q# | Verified Solution | Core Analytical Derivation & Operational Rule | Trap Avoidance & Checkpoint |
| :---: | :--- | :--- | :--- |
| **01** | **`18`** | **Except Keyword:** Parity analysis shows $7, 11, 23$ are odd integers; $18$ is even ($2 \times 9$). "EXCEPT" demands the non-odd element. | ✓ **Trap:** Selecting an odd number satisfies the classification instead of identifying the exception. |
| **02** | **Nila must be trained;<br>No guarantee for all trained.** | **Conditional Implication:** $\text{Permitted} \implies \text{Trained}$. Nila permitted $\implies$ Nila trained. The converse ($\text{Trained} \implies \text{Permitted}$) is not established. | ✓ **Trap:** Never reverse implication arrows! Training is necessary, not proven sufficient. |
| **03** | **`3` (Allowed: `3` and `4`)** | **Interval Bounds:** "At least 3" ($\ge 3$) and "fewer than 5" ($< 5$) forms the integer set $\{3, 4\}$. Among choices, only $3$ qualifies. | ✓ **Trap:** Boundary $5$ is strictly excluded by "fewer than". |
| **04** | **Neither: Allowed.<br>Both: Forbidden.** | **Negated Conjunction ($\neg(A \land B)$):** "Not both" forbids only the simultaneous selection $\{A, B\}$. Selecting $\{A\}$, $\{B\}$, or $\emptyset$ is valid. | ✓ **Trap:** Do not conflate "not both" with "neither/nor" (which forbids either selection). |
| **05** | **`0`, `1`, or `2` lamps** | **Upper Bound ($\le 2$):** Without a separate lower-bound restriction, zero active lamps is fully permissible. | ✓ **Trap:** An upper bound alone never forces any element to be turned on. |
| **06** | **North** | **Clockwise Rotation:** West is $270^\circ$. A $90^\circ$ right turn (CW) yields $270^\circ + 90^\circ = 360^\circ \equiv 0^\circ$ (North). | ✓ **Trap:** Turning left from West gives South. |
| **07** | **South** | **Double Quarter-Turn:** North $\xrightarrow{\text{Left}} \text{West} \xrightarrow{\text{Left}} \text{South}$. Two left turns $= 180^\circ$ polar reversal. | ✓ **Trap:** Net change is a straight half-turn regardless of turn sequence. |
| **08** | **(a) 2 m North of start<br>(b) 12 m walked<br>(c) Facing West** | **Vector Decomposition:** $\Delta x = +5 - 5 = 0\text{ m}$; $\Delta y = +2\text{ m}$. Displacement $= 2\text{ m}$ North.<br>Total distance $= 5 + 2 + 5 = 12\text{ m}$. Last walk was West $\implies$ facing West. | ✓ **Trap:** Facing West does NOT mean your position is West of origin! |
| **09** | **(a) West<br>(b) Position is unchanged** | **In-Place Rotation:** East $+ 180^\circ =$ West. Angular rotation changes orientation vector only; spatial position remains $(0, 0)$. | ✓ **Trap:** Never confuse turning with displacement walking! |
| **10** | **East** | **Observer Coordinate Frame:** For a South-facing person ($\downarrow$), their left hand points East ($\rightarrow$). | ✓ **Trap:** Do not use page-left (West); always align with the observer's body! |
| **11** | **Paternal grandmother** | **Generational Ascendant:** A is mother of B ($[F] \xrightarrow{+1} [M]$); B is father of C ($[M] \xrightarrow{+1} [?]$). A is the mother of C's father. | ✓ **Trap:** Maternal grandmother would be the mother of C's *mother*. |
| **12** | **Neither is determined** | **Gender Attribution:** "P is Q's sister" proves P is female ($[F]$). It provides zero information regarding Q's gender ($[?]$). | ✓ **Trap:** Sibling relation does not transfer gender to the counterpart! |
| **13** | **Father** | **Transitive Full-Sibling Lineage:** S and T are full siblings sharing generation $0$. R is father to S, hence R is father to T. | ✓ **Trap:** Do not invent distinct parentage without explicit prompt context. |
| **14** | **(a) Grandchild<br>(b) Uniquely undetermined** | **Two-Tier Descendant:** U is child of V (son of W). U is W's child's child (grandchild). U's gender is unspecified. | ✓ **Trap:** Cannot choose grandson or granddaughter without explicit gender proof! |
| **15** | **Cousin** | **Parental Sibling's Child:** Father's sister is paternal aunt. Aunt's son is first cousin ($\Delta G = 0$). | ✓ **Trap:** Belongs to generation 0, but is cousin, NOT brother. |
| **16** | **C** | **Transitive Inequality:** $B > A$ and $C > B \implies C > B > A$. Apex element is C. | ✓ **Trap:** Re-orient "shorter than" to $>$ before chaining. |
| **17** | **P, Q, R** | **Age Chain:** $P > Q$ and $Q > R \implies P > Q > R$. Oldest $= P$, middle $= Q$, youngest $= R$. | ✓ **Trap:** Do not keep reading order; sort by magnitude. |
| **18** | **`19th` from bottom** | **Dual-End Formula:** $\text{Bottom} = (N + 1) - \text{Top} = (25 + 1) - 7 = 26 - 7 = 19$.<br>Check: $6 \text{ above} + 1 \text{ target} + 18 \text{ below} = 25$. | ✓ **Trap:** Subtracting $25 - 7 = 18$ fails to add $1$ for the target student! |
| **19** | **`5` people** | **Strict Between Formula:** $\text{Between} = \text{Rank}_2 - \text{Rank}_1 - 1 = 10 - 4 - 1 = 5$ people (positions 5, 6, 7, 8, 9). | ✓ **Trap:** $10 - 4 = 6$ includes an endpoint! |
| **20** | **No; cannot be determined** | **Non-Transitive Common Bound:** $X > Y$ and $Z > Y$. Permissible chains: $X > Z > Y$, $Z > X > Y$, or $X = Z > Y$. | ✓ **Trap:** Having a common shorter acquaintance provides zero relative comparison. |
| **21** | **A–Green, B–Blue, C–Red** | **1-to-1 Elimination:** $B = \text{Blue}$. Colors left: Red, Green. $A \ne \text{Red} \implies A = \text{Green}$. Then $C = \text{Red}$. | ✓ **Trap:** Uniqueness is explicit; process of elimination fixes all 3. |
| **22** | **No** | **Non-Exclusive Selection:** Sharing is permitted. $B$ can choose Red or Blue without violating any rule. | ✓ **Trap:** Do not import 1-to-1 uniqueness when sharing is explicitly allowed! |
| **23** | **`N, L, M`** | **Linear Placement:** $M$ immediately right of $L \implies [L, M]$. $N$ left of $L \implies [N, L, M]$. | ✓ **Trap:** Adjacency is required for $L-M$, but $N$ is placed to the left. |
| **24** | **Yes; arrangement: `A, C, B`** | **Non-Adjacent Inequality:** $\text{Pos}(A) < \text{Pos}(B)$ holds in $[A, C, B]$ ($1 < 3$). $C$ sits in slot 2. | ✓ **Trap:** "Left of" does not mean "immediately left of"! |
| **25** | **Contradictory information** | **Mutual Exclusion:** A count cannot simultaneously satisfy $n = 2$ and $n \ge 3$. $0$ valid configurations exist. | ✓ **Trap:** Insufficient info has $\ge 2$ solutions; contradiction has $0$ solutions. |

---

### 🎙️ Five-Point Oral Rapid Recall Checkpoint

Test your foundational instincts aloud without referring to notes:
1. **At least vs. At most:** "At least 3" means $\ge 3$ (includes 3 and up); "At most 3" means $\le 3$ (includes 0, 1, 2, 3).
2. **Facing vs. Position:** Turning in place alters facing vector only ($\Delta \theta$); spatial position coordinates remain unchanged until you walk ($\Delta x, \Delta y$).
3. **Target Gender vs. Sibling Gender:** "A is the sister of B" defines A as female ($[F]$); B's gender remains completely unknown ($[?]$).
4. **Possible vs. Must Be True:** A proposition is *possible* if true in $\ge 1$ valid model; it *must be true* only if true across all valid models. A single counterexample disproves "must be true".
5. **Missing Information vs. Contradiction:** Missing info permits multiple valid solutions ($N \ge 2$); a contradiction permits zero valid solutions ($N = 0$).

---

## 8. 🔁 Revision, Error Log, and Spaced Retention System

### 8.1 Compact Analytical Decision Flowchart

```text
               Read Question Statement & Underline Operatives
               (NOT, ONLY, EXCEPT, NEITHER/NOR, AT LEAST/MOST)
                                     │
                                     ▼
                      Select Mathematical Representation
   ┌──────────────────────┬──────────────────────┬──────────────────────┐
   ▼                      ▼                      ▼                      ▼
Compass & Path      Family Tree (3-Tier)   Inequality Scale       Cross-Grid Matrix
(Vector Δx, Δy)     (ΔG & [M]/[F]/[?])     (Unidirectional >)    (1-to-1 vs. Shared)
   │                      │                      │                      │
   └──────────────────────┴──────────┬───────────┴──────────────────────┘
                                     │
                                     ▼
                    Apply Rigid Deductive Constraints
                    (Never assume unstated properties!)
                                     │
                                     ▼
                  Enumerate ALL Permitted Configurations
                                     │
          ┌──────────────────────────┼──────────────────────────┐
          ▼                          ▼                          ▼
  0 Permitted Cases          1 Permitted Case          ≥2 Permitted Cases
   [CONTRADICTION]         [DEFINITELY TRUE/FALSE]       [POSSIBLE / CBD]
                                     │
                                     ▼
                     Verify Final Result Against ALL Rules
```

---

### 8.2 High-Frequency Trap Prevention Matrix

| Scenario / Operative | Frequent Faulty Instinct | Rigorous Mathematical Protocol |
| :--- | :--- | :--- |
| **`Only A are B`** | Reversing to $A \implies B$ | Formal implication is $B \implies A$. Entrants must be members; members are not forced to enter. |
| **`Neither A nor B`** | Conflating with "not both" | Excludes BOTH simultaneously ($\neg A \land \neg B$). 0 of either. |
| **`At least` / `At most`** | Dropping boundary or assuming $0$ is barred | Both include boundary ($k$). At most $k$ includes $0$ unless separately barred. |
| **Left / Right Turns** | Using fixed page margins | Use observer's body frame. Facing South $\implies$ left is East. |
| **Displacement vs. Facing**| Treating final facing as location | Separate rotation vector from position vector $(x, y)$. |
| **Kinship Lineage** | Guessing gender from name | Names carry ZERO gender proof. Label $[M]$, $[F]$, or $[?]$. |
| **Only Son** | Assuming no other children exist | "Only son" excludes other sons; daughters may still exist! Only son $\ne$ only child. |
| **Dual-End Rank** | Adding ranks directly ($L + R$) | Must subtract 1: $N = L + R - 1$ because the person is double-counted. |
| **Between Count** | Direct subtraction ($R_2 - R_1$) | Must subtract 1: $\text{Between} = R_2 - R_1 - 1$ to exclude the boundary. |
| **Tabular Deductions** | Assuming unique assignments | Uniqueness holds ONLY if explicitly declared. Otherwise, options can be shared. |

---

### 8.3 Structured Mistake Repair Register

| Date / Problem ID | Exact Keyword or Constraint Missed | Faulty Premise / Fallacy | Governing Analytical Rule | Retest Status (Clean Solve) |
| :---: | :--- | :--- | :--- | :---: |
| *Example: Q04* | *Missed "not both" distinction* | *Assumed neither was also barred* | *$\neg(A \land B)$ permits neither, A only, or B only* | *Completed* |
| *Example: Q18* | *Forgot to add 1 in rank reversal* | *Calculated $25 - 7 = 18$* | *Dual rank: $\text{Bottom} = (N+1) - \text{Top} = 19$* | *Completed* |
| | | | | |
| | | | | |

---

### 8.4 Spaced Revision Foundation Scorecard

> 📊 **Foundation Scorecard:** Target Gate $\ge 20/25$ ($80\%$) First Attempt | Day 7 Review | Day 21 Review

| Sub-Skill Focus Area | Diagnostic Score | Error Pattern / Root Cause | Day 7 Retest | Day 21 Retest | Mastery Status |
| :--- | :---: | :--- | :---: | :---: | :---: |
| **1. Instructions & Qualifiers (Q01–05)** | `__ / 5` | | `__ / 5` | `__ / 5` | 🔲 |
| **2. Directions & Angular Turns (Q06–10)**| `__ / 5` | | `__ / 5` | `__ / 5` | 🔲 |
| **3. Family Trees & Gender (Q11–15)** | `__ / 5` | | `__ / 5` | `__ / 5` | 🔲 |
| **4. Comparisons & Dual Ranks (Q16–20)** | `__ / 5` | | `__ / 5` | `__ / 5` | 🔲 |
| **5. Tables & Condition Checks (Q21–25)**| `__ / 5` | | `__ / 5` | `__ / 5` | 🔲 |
| **Total Cumulative Score** | `__ / 25` | **Target: $\ge 20/25$ ($\ge 80\%$)** | `__ / 25` | `__ / 25` | 🔲 |

<!-- separate learning boxes -->

> **தமிழில்:** தகவல் இல்லாத இடத்தில் உங்கள் விருப்பப்படி முடிவெடுக்க வேண்டாம் (No Assumptions). ஒரு விஷயம் சாத்தியம் (Possible) என்பதற்கும், அதுவே உறுதியான உண்மை (Definitely True) என்பதற்கும் உள்ள வேறுபாட்டை உணருங்கள். நிபந்தனைகளை ஒவ்வொன்றாக சரிபார்த்த பிறகே விடையை உறுதிப்படுத்த வேண்டும்.

---

### 8.5 Ten-Point Foundation Mastery Audit

- [ ] **1. Logical Qualifiers:** I can formally define and differentiate `not`, `except`, `only`, `neither/nor`, `at least`, and `at most`.
- [ ] **2. Boundary Sensitivity:** I understand why "at least 3" includes 3, while "more than 3" excludes 3.
- [ ] **3. Compass Orientation:** I can compute left and right quarter-turns ($90^\circ$) from North, South, East, and West without hesitation.
- [ ] **4. Dual Vectors:** I strictly separate the facing orientation vector from the $(x, y)$ spatial position coordinates.
- [ ] **5. Gender Discipline:** I never assign male or female gender based on personal names; only explicit textual clues.
- [ ] **6. Kinship Direction:** I formulate family tree answers from the target's perspective (e.g., distinguishing Father from Son).
- [ ] **7. Transitive Scaling:** I align all comparative premises onto a single directional inequality chain before concluding.
- [ ] **8. Dual-End Ranks:** I calculate total row counts using $N = L + R - 1$ and opposite ranks using $(N + 1) - \text{Rank}$.
- [ ] **9. Constraint Testing:** I test candidate table arrangements against every premise and recognize when uniqueness is unstated.
- [ ] **10. Epistemic Rigor:** I distinguish between necessary truths, possibilities, under-determined cases, and direct contradictions.

---

### 🧭 Forward Curriculum Bridge

Now that you have mastered the foundational tools of symbolic coordinates, instruction parsing, kinship vectors, and constraint tables in **RF1** and **RF2**, you are prepared for core reasoning chapters:
- ➡️ **Next Step:** Apply these analytical habits in **[R01 — Analogy (சொல் ஒப்புமை)](01-R01-Analogy.md)**.
- 🔁 **Remediation Protocol:** Whenever an error occurs in upcoming chapters (Direction Sense, Blood Relations, Order & Ranking, or Seating Arrangements), return to the specific worked model in RF1 or RF2 to repair the underlying operational rule.
