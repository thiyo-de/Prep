# 🔎 R12 — Finding the Missing Number: Grids, Figures and Operations
### விடுபட்ட எண்ணைக் கண்டறிதல் | Core Reasoning Masterclass

> 🎯 **Mastery Target:** Deduce arithmetic and relational invariants across rows, columns, matrices, number figures (triangles, crosses, wheels), and sector circles; apply multi-example verification; reverse operations for missing inputs; and eliminate distractors under exam constraints.
> ⏱️ **Target Speed & Accuracy:** $\le 35\text{ sec / standard grid}$ | $\ge 80\%$ First-Attempt Accuracy.
> 📌 **Prerequisites:** [RF1 — Letters and Numbers](00-RF1-Letters-and-Numbers.md), [RF2 — Instructions and Relationships](00-RF2-Instructions-and-Relationships.md), and [R07 — Series](03-R07-Series.md). Related: [R01 — Analogy](01-R01-Analogy.md) & [R04 — Classification](02-R04-Classification.md).

---

### 🗺️ Module Architecture & Roadmap

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                 R12: MISSING NUMBER INVARIANT RECOGNITION ENGINE            │
├───────────────┬───────────────┬───────────────┬───────────────┬─────────────┤
│   PILLAR 1    │   PILLAR 2    │   PILLAR 3    │   PILLAR 4    │  PILLAR 5   │
│ Evidence &    │ Rows & Linear │ Columns,      │ Geometric     │ Inverse Ops │
│ Priority      │ Groups        │ Grids & Diag  │ & Circles     │ & Inputs    │
│ (P1–P5)       │ (R1–R5)       │ (G1–G5)       │ (F1–F5)       │ (I1–I5)     │
└───────────────┴───────────────┴───────────────┴───────────────┴─────────────┘
```

| Route Stage | Focus Sections | Core Competency & Method | Passing Gate |
| :---: | :--- | :--- | :---: |
| **Stage 1: Core Foundations** | Sections 1–2 | Read matrix layouts; evaluate operation precedence (BODMAS/PEMDAS) and power tables | $\ge 80\%$ |
| **Stage 2: Evidence Protocol** | Section 3 (P1–P5) | Reject single-case coincidences; enforce universal constants; isolate genuine ambiguity | $\ge 80\%$ |
| **Stage 3: Grids & Formats** | Sections 4–6 (R1–F5) | Detect horizontal rows, vertical columns, diagonal symmetries, triangles, and circular wheels | $\ge 80\%$ |
| **Stage 4: Hidden Inputs** | Section 7 (I1–I5) | Formulate algebraic equations; reverse operations backwards; enforce domain/sign constraints | $\ge 80\%$ |
| **Stage 5: Practice & Drills** | Sections 8–12 | Solve dated CGL benchmarks and 15 independent practice challenges; log diagnostic error repairs | 12/15 ($\ge 80\%$) |

> ℹ️ **Pedagogical Note:** All 25 worked models and 15 independent practice questions are structured teaching exercises designed to train systematic falsification and prevent superficial guessing. Finite arrangements deliberately highlight when evidence is conclusive vs. ambiguous.

---

### 🌳 Missing-Number Decision Architecture Tree

```text
                     INSPECT THE GIVEN NUMBER ARRANGEMENT
                                      │
     ┌────────────────────────────────┼────────────────────────────────┐
     ▼                                ▼                                ▼
[RECTANGULAR GRID]            [GEOMETRIC FIGURE]              [GROUPED TUPLES]
 (Rows vs. Columns)          (Triangle / Cross / Wheel)       (a, b → c or a, b, c → d)
     │                                │                                │
     ├─ Compare Row Lengths           ├─ Triangle: Corners → Centre    ├─ Test Simple Ops:
     │  (Left to Right)               │  (T + L + R or T × L - R)      │  Sum, Diff, Product
     ├─ Compare Col Heights           ├─ Cross: Opposite Pairs         ├─ Add Multiplier /
     │  (Top to Bottom)               │  (T/B vs. L/R Sum or Prod)     │  Fixed Constant: a×b + k
     └─ Diagonal Symmetries           └─ Circle / Wheel: Opposite      └─ Power Operations:
        (A + D = B + C)                  Sectors (n² or n³ jumps)         a² + b², a³ - b³
```

---

## 1. 📘 What is a Missing-Number Question?

### 1.1 The Mathematical Machine Model

A missing-number puzzle presents a structured numerical arrangement containing an unknown value represented by `?` or a blank cell. Your objective is to deduce the mathematical function governing the fully completed examples, verify that it holds consistently across all given units, and then apply that exact rule to compute the missing value.

Think of each complete unit as a **mathematical machine**: input numbers enter the system, and a specific output is generated through an invariant arithmetic rule:

| First Input ($a$) | Second Input ($b$) | Output ($c = f(a, b)$) | Invariant Arithmetic Function |
| :---: | :---: | :---: | :--- |
| $6$ | $4$ | $10$ | $6 + 4 = 10$ ($\text{Sum}$) |
| $9$ | $3$ | $12$ | $9 + 3 = 12$ ($\text{Sum}$) |
| $7$ | $5$ | **?** | $7 + 5 = \mathbf{12}$ ($\text{Sum applied to target}$) |

Both completed rows uniquely support the rule: $\text{First} + \text{Second} = \text{Output}$. Therefore, the missing value is $7 + 5 = 12$.

<!-- separate learning boxes -->

> **தமிழில்:** முழுமையாகக் கொடுக்கப்பட்டுள்ள இரண்டு வரிசைகளிலும் ஒரே கணித விதி பொருந்துகிறதா என்று முதலில் சோதிக்க வேண்டும். இரண்டிலும் உறுதியாகப் பொருந்திய பிறகே, அந்த விதியை விடுபட்ட இடத்தில் பயன்படுத்த வேண்டும்.

---

### 1.2 How R12 Differs from R07 (Series vs. Spatial Invariants)

| Parameter | [R07 — Series](03-R07-Series.md) | **R12 — Finding the Missing Number** |
| :--- | :--- | :--- |
| **Structure** | An ordered 1D linear sequence ($T_1, T_2, T_3, T_4 \dots$). | 2D matrices (rows/columns), geometric figures, or grouped tuples. |
| **Progression** | Terms evolve along an index position ($n \to n+1$). | Independent completed groups serve as simultaneous instances of a single invariant rule. |
| **Neighbourhood** | Adjacent numbers are consecutive chronological states. | Neighbouring numbers are inputs/outputs within a closed local frame; they are not necessarily consecutive terms of a series. |
| **Analytical Goal** | Identify growth rates, deltas ($\Delta$), ratios, or alternating streams. | Identify positional roles (input vs. output) and the invariant algebraic transformation. |

---

### 1.3 Core Glossary & Operational Lexicon

| Term | Tamil Equivalent | Operational Definition in R12 |
| :--- | :--- | :--- |
| **Row** | கிடைமட்ட வரிசை | Numbers arranged horizontally from left to right. |
| **Column** | செங்குத்து வரிசை | Numbers arranged vertically from top to bottom. |
| **Grid / Matrix** | கட்ட அமைப்பு | Numbers organized into a rectangular array of rows and columns. |
| **Cell** | கட்டத்தில் ஓர் இடம் | A single position or coordinate block within a matrix. |
| **Input / Output** | உள்ளீடு / வெளியீடு | The operand values fed into a rule vs. the resulting computed value. |
| **Relation / Rule** | தொடர்பு / விதி | The mathematical equation or transformation connecting the numbers. |
| **Corresponding Position** | ஒத்த இடம் | Identical relative locations across different figures (e.g., top apex of each triangle). |
| **Diagonal** | மூலைவிட்டம் | A line or pair joining opposite corners in a 2×2 block or square matrix. |
| **Consistent** | ஒரே மாதிரியாகப் பொருந்துவது | An algebraic relation that holds true across 100% of the completed examples. |
| **Inverse Operation** | எதிர்ச் செயல் | The reverse mathematical step used to isolate an unknown input (e.g., subtraction reverses addition). |
| **Ambiguity** | ஒன்றுக்கு மேற்பட்ட பொருள் தருவது | When the provided examples support multiple competing rules yielding different answers. |

<!-- separate learning boxes -->

> **தமிழில்:** கிடைமட்ட வரிசை (Row) மற்றும் செங்குத்து வரிசை (Column) ஆகியவற்றை ஒருபோதும் குழப்பக்கூடாது. அதேபோல, ஒரு வடிவியல் அமைப்பில் (எ.கா. முக்கோணத்தின் உச்சி) எந்த இடத்தில் உள்ள எண் உள்ளீடு, எந்த இடத்தில் உள்ள எண் வெளியீடு என்பதைத் தெளிவாக குறித்துக்கொள்ள வேண்டும்.

---

## 2. 🧮 Essential Mathematical Toolset & Invariants

### 2.1 Arithmetic Invariant Fact Bank

Success in R12 relies on instant mental arithmetic recognition rather than memorising outside general knowledge:

| Mathematical Domain | High-Speed Mental Fact Bank | Critical Analytical Purpose in R12 |
| :--- | :--- | :--- |
| **Basic Arithmetic** | Addition ($+$), Subtraction ($-$), Multiplication ($\times$), Exact Division ($\div$) | Primary building blocks of all row/column relationships. |
| **Multiplication Tables** | Rapid factor identification up to $20 \times 20$ | Spot products and quotients without scratch-pad division. |
| **Squares ($1^2 - 10^2$)** | $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$ | Detect power outputs (e.g., $81$ generated from $14 - 5$). |
| **Squares ($11^2 - 20^2$)**| $121, 144, 169, 196, 225, 256, 289, 324, 361, 400$ | Detect large matrix outputs resulting from $(a \pm b)^2$ or $a^2 + b^2$. |
| **Cubes ($1^3 - 10^3$)** | $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$ | Recognize steep jumps ($a^3 - b^3$, e.g., $64 - 8 = 56$). Note: $64$ is both $8^2$ and $4^3$. |
| **Parity & Divisibility** | Even/Odd rules: $E \pm E = E$, $O \pm O = E$, $E \pm O = O$ | Instantly eliminate impossible options based on parity. |
| **Prime Numbers** | $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ | Identify non-composite groupings when standard arithmetic fails. |
| **Operation Order** | Precedence: Brackets $\to$ Powers $\to$ Div/Mult $\to$ Add/Sub | Distinguish $(a + b) \times c$ from $a + b \times c$. |

> [!NOTE]
> **No Extraneous GA/GK Required:** Standard number matrices and figures test pure arithmetic and relational reasoning. Unless a question explicitly introduces calendar months, alphabet letters, or physical units, do not invent external GK stories to explain a purely numeric grid.

<!-- separate learning boxes -->

> **தமிழில்:** அடுக்கு எண்களின் வித்தியாசத்தை நினைவில் கொள்க: $2^3 = 2 \times 2 \times 2 = 8$, ஆனால் $3^2 = 3 \times 3 = 9$. சிறிய உயர்த்தப்பட்ட எண் (power / அடுக்கு) எத்தனை முறை பெருக்க வேண்டும் என்பதைக் குறிக்கிறது.

---

### 2.2 Operator Precedence & The Bracket Invariant

In competitive examinations, parentheses completely change the mathematical output. Consider $a = 8$, $b = 3$, $c = 2$:

- $a + b \times c = 8 + (3 \times 2) = 8 + 6 = 14$ (Multiplication takes priority).
- $(a + b) \times c = (8 + 3) \times 2 = 11 \times 2 = 22$ (Parentheses force addition first).
- $a \times b - c = (8 \times 3) - 2 = 24 - 2 = 22$ (Multiplication first, then subtraction).

> [!WARNING]
> While $(a + b) \times c$ and $a \times b - c$ yield the identical result ($22$) for the triplet $(8, 3, 2)$, they represent entirely different algebraic operations! You must test an additional completed example to determine which rule is the genuine invariant.

Also remember that multiplication and division share equal precedence and are evaluated from left to right:
$$18 \div 3 \times 2 = 6 \times 2 = 12 \quad (\text{not } 18 \div 6 = 3)$$

---

### 2.3 Whole Numbers vs. Digit Manipulation (The Strict Exam Rule)

A recurring point of confusion in SSC and RRB reasoning is the distinction between whole-number operations and digit-level manipulation:

- **Whole-Number Operation:** $24 \times 3 = 72$.
- **Digit-Level Operation:** Decomposing $24$ into digits gives $2 + 4 = 6$, or $2^2 + 4^2 = 4 + 16 = 20$.

> [!CAUTION]
> **Mandatory SSC Instruction Rule:**
> If an exam question explicitly includes the standard instruction: *"Operations should be performed on whole numbers, without breaking down the numbers into their constituent digits (e.g., 13 must be treated as 13, not 1 + 3)"*, any digit-sum or digit-product solution is **strictly invalid**, even if it happens to match the options! Always prioritize whole-number arithmetic unless digit splitting is explicitly permitted or unavoidable.

<!-- separate learning boxes -->

> **தமிழில்:** `24` என்ற முழு எண்ணைப் பயன்படுத்துவதற்கும், `2` மற்றும் `4` என இலக்கங்களாகப் பிரித்துப் பயன்படுத்துவதற்கும் பெரிய வித்தியாசம் உண்டு. கேள்வியின் நிபந்தனை முழு எண்களை மட்டுமே பயன்படுத்த வேண்டும் என்று கூறினால், இலக்கங்களைப் பிரிக்கும் விதியை ஒருபோதும் பயன்படுத்தக்கூடாது.

---

## 3. 🎯 Systematic Answer-Finding Protocol & Evidence Hierarchy

### 3.1 The 8-Step Analytical Process Map

Do not guess random operations. Execute this deterministic protocol to find and verify the target value:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                 8-STEP MISSING NUMBER SOLVING PROTOCOL                      │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
  [STEP 1: Read Constraints] ──────────┼── Are digit operations prohibited? What is missing?
  [STEP 2: Choose Unit Frame] ─────────┼── Focus on a complete Row, Column, or Figure.
  [STEP 3: Assign Fixed Roles] ────────┼── Designate inputs (left/top) vs. output (right/bottom).
  [STEP 4: Test Elementary Ops] ───────┼── Try Sum, Difference, Product, or Quotient.
  [STEP 5: Test Multi-Step / Powers] ──┼── Try fixed constants (a×b + k) or powers (a² ± b²).
  [STEP 6: Falsify Across ALL Sets] ───┼── Verify the EXACT rule on ALL remaining completed units.
  [STEP 7: Compute Target Value] ──────┼── Substitute into the target unit and solve.
  [STEP 8: Sanity Check with Options] ─┼── Verify parity, magnitude, and option consistency.
```

---

### 3.2 Falsification Protocol: Overcoming Single-Example Coincidences

A single completed example can satisfy an infinite number of mathematical formulas. Only the **second (and third) completed examples** provide the decisive evidence needed to eliminate coincidental fits.

| Type of Evidence | Evaluation Verdict | Action Required |
| :--- | :--- | :--- |
| **Violates Stated Constraints** | ❌ **Invalid** | Immediately reject (e.g., splitting digits when forbidden). |
| **Fits 1st Example, Fails 2nd** | ❌ **Coincidence** | Reject immediately; do not alter constants midway. |
| **Changes Constants Ad-Hoc** | ⚠️ **Unsupported** | Reject (e.g., applying $+1$ in row 1, but $+2$ in row 2 without a stated progression). |
| **Fits 100% of Completed Units** | ✅ **Robust Candidate** | Strong candidate for the intended exam rule; apply to target. |
| **Two Competing Rules Fit All** | 🔍 **Genuine Ambiguity** | Check option set; if both are present, inspect official key or question constraints. |

<!-- separate learning boxes -->

> **தமிழில்:** முதல் எடுத்துக்காட்டில் ஒரு விதி சரியாக வந்தாலும், இரண்டாவது எடுத்துக்காட்டில் அது தவறானால் அந்த விதியை உடனடியாக நிராகரிக்க வேண்டும். மாறிலிகளை (constants) நடுவில் உங்கள் விருப்பத்திற்கு மாற்றக்கூடாது.

---

### 3.3 Five Worked Analytical Models (P1–P5)

These foundational models train rule selection, constant invariance, positional discipline, and ambiguity detection before approaching complex layouts:

| Model ID | Input Groups & Target | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **P1**<br>`Rule Selection via Falsification` | `(2, 2 → 4)`<br>`(3, 5 → 8)`<br>Find `(4, 7 → ?)` | 1. Group 1: Both addition ($2 + 2 = 4$) and multiplication ($2 \times 2 = 4$) fit.<br>2. Group 2: Addition gives $3 + 5 = 8$ (Matches!). Multiplication gives $3 \times 5 = 15 \ne 8$ (Falsified!).<br>3. Apply the surviving addition rule to the target: $4 + 7 = 11$. | **Selection:** **11**<br><br>✓ **Key Lesson:** The second completed example, not personal preference, definitively eliminates multiplication. |
| **P2**<br>`Strict Invariance of Constants` | `(3, 4 → 13)`<br>`(5, 2 → 11)`<br>Find `(6, 3 → ?)`<br>Options: $18, 19, 20, 21$ | 1. Test products: $3 \times 4 = 12$ and $5 \times 2 = 10$.<br>2. Compare with outputs: $12 + 1 = 13$, and $10 + 1 = 11$. Both use fixed constant $+1$.<br>3. Apply invariant rule $(a \times b + 1)$: $6 \times 3 + 1 = 18 + 1 = 19$. | **Selection:** **19**<br><br>✓ **Trap Check:** Option $18$ forgets $+1$; options $20/21$ arbitrarily change the constant to $+2/+3$ without justification. |
| **P3**<br>`Positional Order Discipline` | `(9, 4 → 5)`<br>`(12, 7 → 5)`<br>Find `(15, 6 → ?)` | 1. Evaluate directional operation: $\text{First} - \text{Second} = \text{Output}$.<br>2. Verify: $9 - 4 = 5$, and $12 - 7 = 5$. Direction is strictly left-to-right.<br>3. Apply to target preserving order: $15 - 6 = 9$. | **Selection:** **9**<br><br>✓ **Direction Check:** Reversing subtraction yields $-9$; unlike addition, subtraction is non-commutative ($a - b \ne b - a$). |
| **P4**<br>`Detection of Genuine Ambiguity` | `(2, 2 → 4)`<br>`(3, 3 → 6)`<br>Find `(4, 5 → ?)`<br>Options include $8, 9$ | 1. Rule A ($\text{Sum of inputs}$): $2 + 2 = 4$; $3 + 3 = 6$. Predicts $4 + 5 = 9$.<br>2. Rule B ($\text{Twice the first input}$): $2 \times 2 = 4$; $2 \times 3 = 6$. Predicts $2 \times 4 = 8$.<br>3. Because both inputs were identical in the completed sets ($2, 2$ and $3, 3$), the examples cannot distinguish Rule A from Rule B! | **Selection:** **Not Uniquely Determined**<br><br>✓ **Check:** While Sum ($9$) is commonly preferred, it is mathematically underdetermined without unequal input test cases. |
| **P5**<br>`Instruction Constraint Priority` | **Instruction:** Use whole numbers only; do not split digits.<br>`(12, 3 → 15)`, `(21, 3 → 24)`<br>Find `(14, 4 → ?)` | 1. Whole-number addition fits both: $12 + 3 = 15$; $21 + 3 = 24$.<br>2. A candidate digit rule ($\text{First} + \text{Digit Sum}$): $12 + (1+2) = 15$, and $21 + (2+1) = 24$ also coincidentally fits!<br>3. The instruction explicitly bans digit decomposition. Use whole numbers: $14 + 4 = 18$, not $14 + (1+4) = 19$. | **Selection:** **18**<br><br>✓ **Rule:** Explicit negative instructions always override numeric coincidences. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **P1:** முதல் எடுத்துக்காட்டில் பல விதிகள் பொருந்தினாலும், இரண்டாவது எடுத்துக்காட்டில்தான் சரியான விதி முடிவாகும்.
> - **P2:** ஒரு விதியில் $+1$ மாறிலியாக வந்தால், இறுதிக் கணக்கிலும் அதே $+1$-ஐயே பயன்படுத்த வேண்டும்.
> - **P3:** கழித்தல் செய்யும் போது இடமிருந்து வலம் என்ற வரிசை மாறக்கூடாது.

---

## 4. ➕ Rows and Grouped Arithmetic

### 4.1 Structural Invariance in Horizontal Tuples

When analyzing numbers arranged in horizontal rows or tuples $(a, b, c)$, the letters represent **fixed positional coordinates**, not alphabetical ranks:
- Position $a$: Leftmost cell (Input 1)
- Position $b$: Middle cell (Input 2)
- Position $c$: Rightmost cell (Primary Output candidate)

### 4.2 Candidate Operation Families Table

| Operation Family | Algebraic Formulation | Structural Verification Checks |
| :--- | :--- | :--- |
| **Linear Sum / Difference** | $c = a + b$ or $c = a - b$ | Maintain strict positional order for subtraction ($a - b$ vs. $b - a$). |
| **Product / Exact Quotient** | $c = a \times b$ or $c = a \div b$ | Division must be exact ($b \ne 0$). |
| **Affine Transformation** | $c = a \times b \pm k$ | Constant $k$ must remain identical across all rows. |
| **Sum of Independent Powers** | $c = a^2 + b^2$ or $c = a^3 + b^3$ | Evaluate individual squares/cubes before adding. |
| **Power of Sum / Difference** | $c = (a \pm b)^2$ or $c = (a \pm b)^3$ | Evaluate inside brackets first: $(a+b)^2 \ne a^2 + b^2$. |
| **Difference of Squares** | $c = a^2 - b^2 = (a-b)(a+b)$ | Algebraic shortcut for rapid mental calculation. |
| **Digit Operations (If Allowed)** | $c = \sum \text{digits}(a) + \sum \text{digits}(b)$ | Only valid when whole-number constraints are not violated. |

<!-- separate learning boxes -->

> **தமிழில்:** $a^2 + b^2$ (தனித்தனி வர்க்கங்களின் கூட்டுத்தொகை) மற்றும் $(a + b)^2$ (கூட்டுத்தொகையின் வர்க்கம்) ஆகிய இரண்டும் முற்றிலும் வேறானவை. அடைப்புக்குறி உள்ளதா இல்லையா என்பதில் கவனமாக இருங்கள்.

---

### 4.3 Five Worked Analytical Models: Rows & Groups (R1–R5)

| Model ID | Given Row / Tuple Layout | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **R1**<br>`Linear Row Addition` | **Row 1:** $8, 5 \implies 13$<br>**Row 2:** $6, 9 \implies 15$<br>**Row 3:** $7, 4 \implies \mathbf{?}$ | 1. Test hypothesis: $\text{Right} = \text{Left} + \text{Middle}$.<br>2. Row 1: $8 + 5 = 13$ (Valid). Row 2: $6 + 9 = 15$ (Valid).<br>3. Apply to Row 3: $7 + 4 = 11$. | **Selection:** **11**<br><br>✓ **Check:** Horizontal linear addition remains constant across all 3 rows. |
| **R2**<br>`Multiply then Subtract Constant` | **Group 1:** `(4, 5 → 19)`<br>**Group 2:** `(6, 3 → 17)`<br>**Group 3:** `(7, 4 → ?)` | 1. Compute products: $4 \times 5 = 20$, and $6 \times 3 = 18$.<br>2. Compare with outputs: $20 - 1 = 19$, and $18 - 1 = 17$. Invariant rule: $c = a \times b - 1$.<br>3. Apply to Group 3: $7 \times 4 - 1 = 28 - 1 = 27$. | **Selection:** **27**<br><br>✓ **Trap Check:** $(7 - 1) \times 4 = 24$ erroneously subtracts before multiplying, violating precedence. |
| **R3**<br>`Sum of Individual Squares` | **Group 1:** `(3, 4 → 25)`<br>**Group 2:** `(5, 2 → 29)`<br>**Group 3:** `(6, 3 → ?)` | 1. Test sum of squares: $3^2 + 4^2 = 9 + 16 = 25$ (Valid).<br>2. Verify on Group 2: $5^2 + 2^2 = 25 + 4 = 29$ (Valid).<br>3. Apply to Group 3: $6^2 + 3^2 = 36 + 9 = 45$. | **Selection:** **45**<br><br>✓ **Precedence Trap:** $(3 + 4)^2 = 49 \ne 25$; squaring the sum fails immediately on Group 1. |
| **R4**<br>`Difference of Cubes` | **Group 1:** `(4, 2 → 56)`<br>**Group 2:** `(5, 3 → 98)`<br>**Group 3:** `(6, 4 → ?)` | 1. Test difference of cubes: $4^3 - 2^3 = 64 - 8 = 56$ (Valid).<br>2. Verify on Group 2: $5^3 - 3^3 = 125 - 27 = 98$ (Valid).<br>3. Apply to Group 3: $6^3 - 4^3 = 216 - 64 = 152$. | **Selection:** **152**<br><br>✓ **Trap Check:** $(6 - 4)^3 = 2^3 = 8$ fails earlier groups ($[4-2]^3 = 8 \ne 56$). |
| **R5**<br>`Sum of Digits' Squares (Allowed)` | **Rule:** Output = sum of squares of digits.<br>`23 → 13`, `41 → 17`<br>Find `35 → ?` | 1. Verify example 1: $2^2 + 3^2 = 4 + 9 = 13$.<br>2. Verify example 2: $4^2 + 1^2 = 16 + 1 = 17$.<br>3. Apply to target $35$: $3^2 + 5^2 = 9 + 25 = 34$. | **Selection:** **34**<br><br>✓ **Constraint Note:** Valid here because the problem explicitly specified a digit-based rule. Whole-number square $35^2 = 1225$ is rejected. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **R2:** முதலில் பெருக்கி, பின்னர் 1-ஐக் கழிக்க வேண்டும்; கழித்த பிறகு பெருக்கக்கூடாது.
> - **R3:** தனித்தனி எண்களை வர்க்கப்படுத்திக் கூட்டுவது ($3^2 + 4^2 = 25$), மொத்தக் கூட்டுத்தொகையை வர்க்கப்படுத்துவதிலிருந்து ($7^2 = 49$) முற்றிலும் வேறுபட்டது.

---

## 5. 🧩 Columns, Grids and Diagonal Symmetries

### 5.1 Deciding the Unit of Comparison in Matrices

In a 3×3 matrix, examine complete columns and complete rows before making assumptions:
- If Row 3 contains the largest values, test vertical column operations: $\text{Col}_3 = f(\text{Col}_1, \text{Col}_2)$.
- If Column 3 contains the largest values, test horizontal row operations: $\text{Row}_3 = f(\text{Row}_1, \text{Row}_2)$.
- Do not automatically treat a 3×3 grid as a 9-term snake sequence unless all matrix properties fail.

### 5.2 2×2 Blocks and Diagonal Equivalence

For a 2×2 block, use this coordinate labeling system:

```text
┌───────────────┬───────────────┐
│  Top-Left: A  │ Top-Right: B  │
├───────────────┼───────────────┤
│ Bottom-Left: C│ Bottom-Right:D│
└───────────────┴───────────────┘
```

The diagonal pairs are **A / D** (main diagonal) and **B / C** (anti-diagonal). A common competitive exam relationship is the **Equivalence of Diagonal Sums or Products**:
$$A + D = B + C \quad \text{or} \quad A \times D = B \times C$$

<!-- separate learning boxes -->

> **தமிழில்:** ஒரு 3×3 கட்டத்தில் மிகப்பெரிய எண்கள் கடைசி வரிசையில் (கீழே) இருந்தால், செங்குத்து வரிசைகளை (Columns) ஆய்வு செய்யுங்கள். மிகப்பெரிய எண்கள் வலதுபுறம் இருந்தால் கிடைமட்ட வரிசைகளை (Rows) ஆய்வு செய்யுங்கள்.

---

### 5.3 Five Worked Analytical Models: Grids & Cross-Checks (G1–G5)

| Model ID | Grid Matrix Representation | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **G1**<br>`Column Summation` | $$\begin{matrix} \mathbf{C_1} & \mathbf{C_2} & \mathbf{C_3} \\ 4 & 7 & 9 \\ 6 & 5 & 3 \\ 10 & 12 & \mathbf{?} \end{matrix}$$ | 1. Inspect columns: Bottom numbers are the largest.<br>2. Col 1: $4 + 6 = 10$. Col 2: $7 + 5 = 12$.<br>3. Col 3: $9 + 3 = 12$. | **Selection:** **12**<br><br>✓ **Orientation:** The output is located at the bottom of the column, not at the right of the row. |
| **G2**<br>`Top Output: Squared Difference` | $$\begin{matrix} \mathbf{C_1} & \mathbf{C_2} & \mathbf{C_3} \\ 81 & 25 & \mathbf{?} \\ 5 & 9 & 6 \\ 14 & 14 & 13 \end{matrix}$$ | 1. Top row contains perfect squares ($81 = 9^2, 25 = 5^2$).<br>2. Col 1: $(14 - 5)^2 = 9^2 = 81$.<br>3. Col 2: $(14 - 9)^2 = 5^2 = 25$.<br>4. Col 3: $(13 - 6)^2 = 7^2 = 49$. | **Selection:** **49**<br><br>✓ **Trap Check:** $13^2 - 6^2 = 169 - 36 = 133$ changes the formula to difference of squares. |
| **G3**<br>`Diagonal Sum Equivalence` | **Block 1:** $\begin{matrix} 4 & 7 \\ 5 & 8 \end{matrix}$ ($A+D=B+C$)<br>**Block 2:** $\begin{matrix} 6 & 9 \\ 2 & 5 \end{matrix}$<br>**Block 3:** $\begin{matrix} 8 & 11 \\ 4 & \mathbf{?} \end{matrix}$ | 1. Block 1: $A + D = 4 + 8 = 12$; $B + C = 7 + 5 = 12$ (Equal!).<br>2. Block 2: $6 + 5 = 11$; $9 + 2 = 11$ (Equal!).<br>3. Block 3: $B + C = 11 + 4 = 15$. Therefore, $A + D = 8 + ? = 15 \implies ? = 7$. | **Selection:** **7**<br><br>✓ **Invariant:** The total sum can change between blocks ($12 \to 11 \to 15$), but the internal diagonal equality is preserved. |
| **G4**<br>`Row and Column Rule Concordance` | $$\begin{matrix} 2 & 4 & 6 \\ 3 & 6 & 9 \\ 4 & 8 & \mathbf{?} \end{matrix}$$ | 1. **Row Analysis:** Each row is $a, 2a, 3a$. In Row 3, $a = 4 \implies 3a = 3 \times 4 = 12$.<br>2. **Column Analysis:** Col 3 is an AP with common difference $+3$: $6, 9, \mathbf{12}$.<br>3. Both independent spatial readings yield the identical result! | **Selection:** **12**<br><br>✓ **Robustness:** Concordance between multiple valid methods confirms the solution beyond doubt. |
| **G5**<br>`Simultaneous Border Totals` | $$\begin{matrix} \text{Row} & \text{L} & \text{R} & \text{Total} \\ \text{A} & 4 & \mathbf{?} & 13 \\ \text{B} & 7 & 5 & 12 \\ \text{Total} & 11 & 14 & 25 \end{matrix}$$ | 1. Solve via Row A: $4 + ? = 13 \implies ? = 9$.<br>2. Cross-check via Right Column: $? + 5 = 14 \implies ? = 9$.<br>3. Verify all borders: $4 + 7 = 11$ and $13 + 12 = 25$. | **Selection:** **9**<br><br>✓ **Verification:** Dual-axis verification guarantees 100% mathematical certainty. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **G2:** மிகப்பெரிய எண்கள் கட்டத்தின் உச்சியில் (Top) இருந்தால், கீழே உள்ள எண்களின் வித்தியாசம் அல்லது பெருக்கற்பலன் மேலே உள்ள வர்க்கத்தை உருவாக்குகிறதா என்று பார்க்க வேண்டும்.
> - **G3:** மூலைவிட்ட எண்களின் கூட்டுத்தொகை (Diagonal Sum) இரண்டு பக்கமும் சமமாக உள்ளதா என்பதைச் சரிபாருங்கள்.

---

## 6. 🔺 Geometric Number Figures: Triangles, Crosses and Circular Wheels

### 6.1 Positional Geometry Maps

In competitive exams, geometric figures establish spatial relationships between outer satellite values and a central target value:

#### 1. Triangle Configuration
- Corners: **T** (Top Apex), **L** (Bottom-Left), **R** (Bottom-Right)
- Centre: **C** (Internal Target Output)

```text
          T (Top)
           / \
          /   \
         /  C  \
        /       \
  L (Left) ─── R (Right)
```

#### 2. Four-Direction Cross Configuration
- Satellites: **T** (Top), **B** (Bottom), **L** (Left), **R** (Right)
- Centre: **C** (Core Target Output)
- Opposite Pairs: **T / B** and **L / R**

```text
          T (Top)
             │
   L (Left) ─┼─ R (Right)
             │
        B (Bottom)
```

#### 3. Eight-Sector Circular Wheel
- Sectors: Numbered $1$ to $8$ clockwise starting from top.
- Opposite Sectors: Shifted by $4$ positions: $(1 \leftrightarrow 5)$, $(2 \leftrightarrow 6)$, $(3 \leftrightarrow 7)$, $(4 \leftrightarrow 8)$.

```text
       [8]   [1]   [2]
          \   │   /
       [7]── [C] ──[3]
          /   │   \
       [6]   [5]   [4]
```

<!-- separate learning boxes -->

> **தமிழில்:** வடிவங்கள் கணக்கீட்டு முறையைக் குறிப்பதில்லை; அவை எண்கள் இருக்கும் இடங்களை மட்டுமே குறிக்கின்றன. முக்கோணம் என்றால் மூன்று எண்களின் கூட்டல் அல்லது பெருக்கல் மைய எண்ணைத் தரும்; வட்டச் சக்கரம் என்றால் எதிரெதிர் பகுதிகள் வர்க்கமாகவோ கனமாகவோ அமைந்திருக்கும்.

---

### 6.2 Five Worked Analytical Models: Figure-Based Arithmetic (F1–F5)

| Model ID | Geometric Layout & Values | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **F1**<br>`Triangle: Sum of Three Corners` | **Fig 1:** $(T=3, L=4, R=5 \implies C=12)$<br>**Fig 2:** $(T=2, L=6, R=7 \implies C=15)$<br>**Fig 3:** $(T=5, L=3, R=8 \implies C=\mathbf{?})$ | 1. Test sum of corners: $C = T + L + R$.<br>2. Fig 1: $3 + 4 + 5 = 12$ (Valid). Fig 2: $2 + 6 + 7 = 15$ (Valid).<br>3. Fig 3: $5 + 3 + 8 = 16$. | **Selection:** **16**<br><br>✓ **Check:** All 3 corner nodes enter symmetrically into the central sum. |
| **F2**<br>`Triangle: Positional Asymmetry` | **Fig 1:** $(T=4, L=5, R=3 \implies C=17)$<br>**Fig 2:** $(T=6, L=3, R=4 \implies C=14)$<br>**Fig 3:** $(T=7, L=4, R=5 \implies C=\mathbf{?})$ | 1. Test asymmetric formula: $C = T \times L - R$.<br>2. Fig 1: $4 \times 5 - 3 = 20 - 3 = 17$ (Valid).<br>3. Fig 2: $6 \times 3 - 4 = 18 - 4 = 14$ (Valid).<br>4. Fig 3: $7 \times 4 - 5 = 28 - 5 = 23$. | **Selection:** **23**<br><br>✓ **Trap Check:** Permuting corner roles (e.g., $T \times R - L = 7 \times 5 - 4 = 31$) fails earlier figures. |
| **F3**<br>`Cross: Difference of Opposite Sums` | **Fig 1:** $(T=10, B=8, L=3, R=4 \implies C=11)$<br>**Fig 2:** $(T=12, B=9, L=5, R=2 \implies C=14)$<br>**Fig 3:** $(T=15, B=7, L=4, R=3 \implies C=\mathbf{?})$ | 1. Group opposite pairs: $(T+B)$ and $(L+R)$.<br>2. Fig 1: $(10 + 8) - (3 + 4) = 18 - 7 = 11$ (Valid).<br>3. Fig 2: $(12 + 9) - (5 + 2) = 21 - 7 = 14$ (Valid).<br>4. Fig 3: $(15 + 7) - (4 + 3) = 22 - 7 = 15$. | **Selection:** **15**<br><br>✓ **Symmetry:** Vertical pair sum minus horizontal pair sum remains constant. |
| **F4**<br>`Cross: Difference of Opposite Products` | **Fig 1:** $(T=4, B=5, L=3, R=2 \implies C=14)$<br>**Fig 2:** $(T=6, B=3, L=4, R=2 \implies C=10)$<br>**Fig 3:** $(T=7, B=4, L=5, R=3 \implies C=\mathbf{?})$ | 1. Test formula: $C = (T \times B) - (L \times R)$.<br>2. Fig 1: $(4 \times 5) - (3 \times 2) = 20 - 6 = 14$ (Valid).<br>3. Fig 2: $(6 \times 3) - (4 \times 2) = 18 - 8 = 10$ (Valid).<br>4. Fig 3: $(7 \times 4) - (5 \times 3) = 28 - 15 = 13$. | **Selection:** **13**<br><br>✓ **Trap Check:** Do not carry over Model F3's sum rule; test multiplication on each fresh puzzle. |
| **F5**<br>`8-Sector Wheel: Opposite Squares` | Sectors $1-8$ values:<br>$3, 5, 4, 6, 9, 25, 16, \mathbf{?}$<br>Sectors $1-4$ map to $5-8$. | 1. Map opposite pairs: $1 \leftrightarrow 5$, $2 \leftrightarrow 6$, $3 \leftrightarrow 7$, $4 \leftrightarrow 8$.<br>2. Check completed pairs: $3^2 = 9$, $5^2 = 25$, $4^2 = 16$.<br>3. Sector $8$ is opposite Sector $4$ (value $6$): $6^2 = 36$. | **Selection:** **36**<br><br>✓ **Index vs. Value:** Position index is $4$, but its numeric value is $6$. $6^2 = 36$ is the required answer. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **F3 & F4:** சிலுவை (+) போன்ற அமைப்பில், எதிரெதிர் எண்களை (மேல்-கீழ் மற்றும் இடது-வலது) தனித்தனியாகக் கூட்டி அல்லது பெருக்கிக் கழிக்க வேண்டும்.
> - **F5:** வட்டச் சக்கரத்தில் எதிரெதிர் பகுதிகள் வர்க்கமாக ($n^2$) உள்ளன. இட எண்ணையும் (Sector 4) அதன் மதிப்பையும் (6) குழப்பக்கூடாது ($6^2 = 36$).

---

## 7. ↩️ Missing Inputs: Reverse Equations & Domain Boundaries

### 7.1 Forward Rules vs. Backward Inversion Table

When the unknown `?` is an input operand rather than the final output, establish the forward relation first, then apply exact **inverse mathematical operations**:

| Forward Relationship | Target Unknown ($x$) | Algebraic Inversion Formula | Inversion Boundary Checks |
| :--- | :--- | :--- | :--- |
| **Addition:** $x + b = c$ | $x$ | $x = c - b$ | Subtract known addend from output. |
| **Multiplication:** $x \times b = c$ | $x$ | $x = c \div b$ | Requires $b \ne 0$; result must be an integer. |
| **Affine:** $x \times b + k = c$ | $x$ | $x = (c - k) \div b$ | **Undo addition first**, then divide by $b$. |
| **Bracketed:** $(x + b) \times k = c$ | $x$ | $x = (c \div k) - b$ | **Undo multiplication first**, then subtract $b$. |
| **Square:** $x^2 = c$ | $x$ | $x = \pm \sqrt{c}$ | Check domain constraint: if positive integer is specified, discard $-\sqrt{c}$. |

---

### 7.2 The 5-Step Process Map for Undoing Multi-Step Operations

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                 5-STEP INVERSE EQUATION SOLVING PROTOCOL                    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
  [STEP 1: Formulate Equation] ────────┼── Replace '?' with variable 'x' in the forward rule.
  [STEP 2: Reverse Last Operation] ────┼── If rule added k, subtract k from output first.
  [STEP 3: Reverse Prior Operations] ──┼── Reverse multiplications/powers in exact reverse BODMAS order.
  [STEP 4: Check Domain Boundaries] ───┼── Enforce constraints: positive integer, non-zero divisor.
  [STEP 5: Substitute Back & Verify] ──┼── Plug 'x' back into the forward equation to confirm equality.
```

<!-- separate learning boxes -->

> **தமிழில்:** முன்னோக்கிச் செய்த செயல்களின் எதிர்வரிசையில் பின்னோக்கிச் செல்ல வேண்டும்:
> - முன்னோக்கி: "முதலில் பெருக்கு $\to$ பிறகு கூட்டு"
> - பின்னோக்கி: "முதலில் கழி $\to$ பிறகு வகு"

---

### 7.3 Five Worked Analytical Models: Unknown Inputs & Limits (I1–I5)

| Model ID | Input Triplets & Target | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **I1**<br>`Missing Addend Input` | `(6, 4 → 10)`<br>`(7, 5 → 12)`<br>`(?, 8 → 17)` | 1. Invariant forward rule: $a + b = c$.<br>2. Formulate target equation: $x + 8 = 17$.<br>3. Invert addition via subtraction: $x = 17 - 8 = 9$.<br>4. Substitute back: $9 + 8 = 17$ (Confirmed). | **Selection:** **9**<br><br>✓ **Trap Check:** $17 + 8 = 25$ erroneously adds instead of inverting. |
| **I2**<br>`Inverse of Affine Transformation` | `(4, 3 → 17)`<br>`(5, 4 → 25)`<br>`(?, 4 → 33)` | 1. Forward rule: $\text{First} \times \text{Second} + 5 = \text{Output}$ ($12 + 5 = 17$, $20 + 5 = 25$).<br>2. Target equation: $4x + 5 = 33$.<br>3. Step 1 (Undo $+5$): $4x = 33 - 5 = 28$.<br>4. Step 2 (Undo $\times 4$): $x = 28 \div 4 = 7$.<br>5. Check: $7 \times 4 + 5 = 28 + 5 = 33$ (Confirmed). | **Selection:** **7**<br><br>✓ **Precedence Trap:** $33 \div 4 - 5$ reverses operations in wrong order, yielding non-integer nonsense. |
| **I3**<br>`Inverse of Bracketed Operation` | Triplet $(a, b, c) \implies \text{Output}$<br>`(4, 6, 3 → 30)`<br>`(5, 7, 2 → 24)`<br>`(?, 8, 4 → 60)` | 1. Forward rule: $(a + b) \times c = \text{Output}$ ($(4+6)\times 3 = 30$, $(5+7)\times 2 = 24$).<br>2. Target equation: $(x + 8) \times 4 = 60$.<br>3. Step 1 (Undo $\times 4$): $x + 8 = 60 \div 4 = 15$.<br>4. Step 2 (Undo $+8$): $x = 15 - 8 = 7$.<br>5. Check: $(7 + 8) \times 4 = 15 \times 4 = 60$ (Confirmed). | **Selection:** **7**<br><br>✓ **Trap Check:** $(60 - 8) \div 4 = 13$ assumes non-bracketed precedence $4x + 8 = 60$. |
| **I4**<br>`Domain Bounds on Squared Inputs` | Forward rule: $a^2 - b = c$.<br>`(4, 3 → 13)`, `(6, 5 → 31)`<br>Find `(?, 7 → 18)` where input must be a **positive integer**. | 1. Forward verification: $4^2 - 3 = 13$, $6^2 - 5 = 31$ (Valid).<br>2. Target equation: $x^2 - 7 = 18 \implies x^2 = 25$.<br>3. Algebraic roots are $+5$ and $-5$.<br>4. Applying the "positive integer" condition selects $+5$. Check: $5^2 - 7 = 18$. | **Selection:** **5**<br><br>✓ **Domain Boundary:** If negative numbers were permitted, $-5$ would also be mathematically valid ($[-5]^2 - 7 = 18$). |
| **I5**<br>`Non-Existent Integer Solution` | Forward rule: $\text{Output} = 3 \times \text{Input} + 2$.<br>`2 → 8`, `4 → 14`<br>Find Input for Output $= 15$ (Required to be an integer). | 1. Formulate equation: $3x + 2 = 15$.<br>2. Solve: $3x = 13 \implies x = 13/3 = 4.333...$<br>3. $13/3$ is not an integer! Trying $x=4 \implies 14$; trying $x=5 \implies 17$.<br>4. Exact equality is impossible under integer constraints. | **Selection:** **No Integer Solution**<br><br>✓ **Exam Takeaway:** Never round a required exact solution to the nearest option ($4$ or $5$). |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **I2:** $4x + 5 = 33 \implies 4x = 28 \implies x = 7$. கடைசியாகக் கூட்டப்பட்ட 5-ஐ முதலில் கழித்துவிட்டு, பின்னரே 4-ஆல் வகுக்க வேண்டும்.
> - **I4:** $x^2 = 25$ என்றால் $x = +5$ அல்லது $-5$. கேள்வியில் "மிகை முழு எண்" (Positive integer) என்று கூறப்பட்டுள்ளதால் $+5$ மட்டுமே விடையாகும்.

---

## 8. 📚 Verified SSC CGL Benchmark Questions (Dated PYQs)

The following two questions represent verified publisher-reported questions from actual Staff Selection Commission (SSC) CGL examinations:

### 8.1 SSC CGL — 12 June 2019, Shift 2

Study the given numerical matrix and select the missing number from the given options:

$$\begin{matrix}
\mathbf{C_1} & \mathbf{C_2} & \mathbf{C_3} \\
64 & 49 & \mathbf{?} \\
12 & 17 & 4 \\
20 & 24 & 8
\end{matrix}$$

**Reported Options:** (1) $36$ \quad (2) $25$ \quad (3) $12$ \quad (4) $\mathbf{16}$

#### Analytical Derivation:
1. **Inspect Layout:** Top row numbers ($64, 49, ?$) are prominent perfect squares ($8^2, 7^2$).
2. **Column 1:** Bottom minus middle: $20 - 12 = 8$. Square the result: $8^2 = 64$.
3. **Column 2:** Bottom minus middle: $24 - 17 = 7$. Square the result: $7^2 = 49$.
4. **Column 3 (Target):** Bottom minus middle: $8 - 4 = 4$. Square the result: $4^2 = \mathbf{16}$.

**Official Selection:** **16 (Option 4)**  
*Insight:* Output is at the top of each column. Subtraction occurs before squaring: $(\text{Row}_3 - \text{Row}_2)^2 = \text{Row}_1$. [Testbook CGL Attribution](https://testbook.com/question-answer/select-the-missing-number-from-the-given-options--5d91ef43f60d5d61c4439ffb).

---

### 8.2 SSC CGL 2020 Tier-I — Held 13 August 2021, Shift 1

Study the given pattern carefully and select the number that can replace the question mark (`?`):

$$\begin{matrix}
\mathbf{C_1} & \mathbf{C_2} & \mathbf{C_3} \\
4 & 7 & 6 \\
15 & \mathbf{?} & 21 \\
44 & 68 & 60
\end{matrix}$$

**Reported Options:** (1) $19$ \quad (2) $20$ \quad (3) $18$ \quad (4) $\mathbf{24}$

#### Analytical Derivation:
1. **Inspect Layout:** Bottom row values are large multiples ($44, 68, 60$). Test column operations combining Row 1 and Row 2 to produce Row 3.
2. **Column 1:** Middle minus top: $15 - 4 = 11$. Multiply by constant factor $4$: $11 \times 4 = 44$.
3. **Column 3:** Middle minus top: $21 - 6 = 15$. Multiply by constant factor $4$: $15 \times 4 = 60$.
4. **Column 2 (Target Input):** Invariant rule is $(\text{Row}_2 - \text{Row}_1) \times 4 = \text{Row}_3$.
   $$(x - 7) \times 4 = 68 \implies x - 7 = 68 \div 4 = 17 \implies x = 17 + 7 = \mathbf{24}$$
5. **Cross-Check:** $(24 - 7) \times 4 = 17 \times 4 = 68$ (Confirmed).

**Official Selection:** **24 (Option 4)**  
*Insight:* The unknown `?` is an internal input cell. Invert the operation backwards: divide by $4$, then add $7$. [Testbook CGL Attribution](https://testbook.com/question-answer/study-the-given-pattern-carefully-and-select-the-n--613f3d29c092f248ae856a03).

<!-- separate learning boxes -->

> **தமிழில்:**
> - **8.1 (CGL 2019):** கீழே உள்ள இரண்டு எண்களின் வித்தியாசத்தைக் கண்டு, அதனை வர்க்கப்படுத்தினால் உச்சி எண் கிடைக்கும்: $(8 - 4)^2 = 4^2 = 16$.
> - **8.2 (CGL 2021):** நடு எண்களிலிருந்து முதல் எண்ணைக் கழித்து, 4-ஆல் பெருக்கினால் அடி எண் கிடைக்கும்: $(x - 7) \times 4 = 68 \implies x - 7 = 17 \implies x = 24$.

---

## 9. 📝 Independent Practice Challenges

Attempt these 15 questions independently without looking at the solutions. Record your time and rule for each question. Complete solutions and error audits are provided in Section 10.

### Set A: 10 Core Foundation Questions (Untimed Diagnostic)

- **Q1.** Find the missing value: `(7, 5 → 12)`, `(9, 4 → 13)`, `(8, 6 → ?)`
- **Q2.** Find the missing value: `(13, 5 → 8)`, `(17, 6 → 11)`, `(20, 7 → ?)`
- **Q3.** Find the missing value: `(4, 6 → 24)`, `(7, 3 → 21)`, `(5, 8 → ?)`
- **Q4.** Find the missing value: `(4, 3 → 14)`, `(5, 4 → 22)`, `(6, 5 → ?)`
- **Q5.** Find the missing value: `(5, 2 → 29)`, `(4, 3 → 25)`, `(7, 2 → ?)`
- **Q6.** Find the missing value in this 3×3 matrix:

$$\begin{matrix}
5 & 8 & 7 \\
4 & 3 & 6 \\
9 & 11 & \mathbf{?}
\end{matrix}$$

- **Q7.** Triangle corner-to-centre relationship $(T, L, R \implies C)$:  
  Fig 1: `(4, 2, 5 → 11)`, Fig 2: `(3, 6, 4 → 13)`, Fig 3: `(5, 7, 2 → ?)`
- **Q8.** Missing input: `(9, 4 → 13)`, `(6, 8 → 14)`, `(?, 7 → 19)`
- **Q9.** Missing input: `(3, 5 → 18)`, `(4, 6 → 27)`, `(?, 4 → 35)`
- **Q10.** An 8-sector wheel contains clockwise values: $2, 4, 5, 7, 4, 16, 25, \mathbf{?}$. Find the missing value using opposite-sector relationships.

---

### Set B: 5 Advanced Application & Evidence Challenges

- **Q11.** Find the missing value in the top row:

$$\begin{matrix}
36 & 16 & \mathbf{?} \\
3 & 7 & 8 \\
9 & 11 & 13
\end{matrix}$$

- **Q12.** Four-direction satellite figure $(T, B, L, R \implies C)$:  
  Fig 1: `(5, 4, 3, 2 → 14)`, Fig 2: `(6, 5, 4, 3 → 18)`, Fig 3: `(8, 4, 5, 2 → ?)`
- **Q13.** Triplets $(a, b, c) \implies \text{Output}$ under a sum-then-multiply rule:  
  Given `(3, 5, 2 → 16)` and `(6, 4, 3 → 30)`, find `(?, 7, 4 → 48)`.
- **Q14.** Evidence discrimination drill:  
  Given `(4, 4 → 8)` and `(6, 6 → 12)`, find `(5, 8 → ?)`. With no further constraints, compare Rule 1 ($\text{Sum of inputs}$) against Rule 2 ($\text{Twice the first input}$). Does the given information uniquely distinguish between $13$ and $10$?
- **Q15.** Repeated 2×2 blocks with equal diagonal sums ($A + D = B + C$):  
  Block 1: $\begin{matrix} 5 & 8 \\ 4 & 7 \end{matrix}$; Block 2: $\begin{matrix} 9 & 6 \\ 7 & 4 \end{matrix}$; Block 3: $\begin{matrix} 10 & 13 \\ 6 & \mathbf{?} \end{matrix}$. Find `?` and verify diagonal sums.

---

## 10. ✅ Complete Solutions, Step-by-Step Derivations & Trap Audits

| Q# | Selection | Step-by-Step Mathematical Derivation | Verification Check & Trap Audit |
| :---: | :---: | :--- | :--- |
| **Q1** | **14** | Simple addition: $a + b = c$.<br>Check: $7 + 5 = 12$, $9 + 4 = 13$. Target: $8 + 6 = \mathbf{14}$. | ✓ Linear sum holds across all groups. |
| **Q2** | **13** | Simple subtraction: $a - b = c$.<br>Check: $13 - 5 = 8$, $17 - 6 = 11$. Target: $20 - 7 = \mathbf{13}$. | ✓ Direction strictly left minus right. |
| **Q3** | **40** | Simple product: $a \times b = c$.<br>Check: $4 \times 6 = 24$, $7 \times 3 = 21$. Target: $5 \times 8 = \mathbf{40}$. | ✓ Direct multiplication table match. |
| **Q4** | **32** | Affine rule: $a \times b + 2 = c$.<br>Check: $4 \times 3 + 2 = 14$, $5 \times 4 + 2 = 22$. Target: $6 \times 5 + 2 = 30 + 2 = \mathbf{32}$. | ✓ Fixed constant is $+2$. Do not alter to $+3$. |
| **Q5** | **53** | Sum of squares: $a^2 + b^2 = c$.<br>Check: $5^2 + 2^2 = 25 + 4 = 29$, $4^2 + 3^2 = 16 + 9 = 25$. Target: $7^2 + 2^2 = 49 + 4 = \mathbf{53}$. | ✓ $(7+2)^2 = 81$ is the bracket-confusion trap. |
| **Q6** | **13** | Column sum: $\text{Row}_1 + \text{Row}_2 = \text{Row}_3$.<br>Col 1: $5 + 4 = 9$. Col 2: $8 + 3 = 11$. Col 3: $7 + 6 = \mathbf{13}$. | ✓ Output is bottom element. |
| **Q7** | **14** | Triangle corners sum: $C = T + L + R$.<br>Fig 1: $4 + 2 + 5 = 11$. Fig 2: $3 + 6 + 4 = 13$. Fig 3: $5 + 7 + 2 = \mathbf{14}$. | ✓ Symmetric addition of all 3 vertices. |
| **Q8** | **12** | Missing input in addition: $x + 7 = 19$.<br>Subtract: $x = 19 - 7 = \mathbf{12}$. Re-check: $12 + 7 = 19$. | ✓ Undo addition via subtraction. |
| **Q9** | **8** | Missing input in affine rule: $a \times b + 3 = c$.<br>Check: $3 \times 5 + 3 = 18$, $4 \times 6 + 3 = 27$. Target: $4x + 3 = 35 \implies 4x = 32 \implies x = \mathbf{8}$. | ✓ Undo $+3$ first ($32$), then divide by $4$. |
| **Q10** | **49** | Opposite sectors are squares ($S_{n+4} = S_n^2$).<br>Opposites: $2^2 = 4$, $4^2 = 16$, $5^2 = 25$. Target is opposite $7 \implies 7^2 = \mathbf{49}$. | ✓ Position 8 opposes Position 4 (value 7). |
| **Q11** | **25** | Top row is squared difference: $\text{Row}_1 = (\text{Row}_3 - \text{Row}_2)^2$.<br>Col 1: $(9 - 3)^2 = 6^2 = 36$. Col 2: $(11 - 7)^2 = 4^2 = 16$. Col 3: $(13 - 8)^2 = 5^2 = \mathbf{25}$. | ✓ Subtraction before squaring. |
| **Q12** | **22** | Cross opposite products: $C = (T \times B) - (L \times R)$.<br>Fig 1: $20 - 6 = 14$. Fig 2: $30 - 12 = 18$. Fig 3: $(8 \times 4) - (5 \times 2) = 32 - 10 = \mathbf{22}$. | ✓ Vertical product minus horizontal product. |
| **Q13** | **5** | Missing input in bracketed rule: $(x + 7) \times 4 = 48$.<br>Undo multiplication: $x + 7 = 48 \div 4 = 12$. Undo addition: $x = 12 - 7 = \mathbf{5}$. | ✓ Re-check: $(5 + 7) \times 4 = 12 \times 4 = 48$. |
| **Q14** | **Not Distinguished** | Rule 1 ($\text{Sum}$) gives $4+4=8$, $6+6=12 \implies 5+8=\mathbf{13}$.<br>Rule 2 ($\text{Double First}$) gives $2\times 4=8$, $2\times 6=12 \implies 2\times 5=\mathbf{10}$.<br>Both rules perfectly satisfy the supplied examples. Information is insufficient. | ✓ Essential exam awareness: acknowledges genuine ambiguity. |
| **Q15** | **9** | Equal diagonal sums ($A + D = B + C$).<br>Block 1: $5 + 7 = 8 + 4 = 12$. Block 2: $9 + 4 = 6 + 7 = 13$.<br>Block 3: $10 + x = 13 + 6 = 19 \implies x = 19 - 10 = \mathbf{9}$. | ✓ Diagonal sum is $19$; $10 + 9 = 13 + 6$. |

> 🎯 **Score Assessment:**
> - **Set A:** Passing threshold is $\ge 7/10$ ($70\%$). Review any arithmetic slips before attempting timed sets.
> - **Set B:** Application check ($4/5 \ge 80\%$). Demonstrates robust structural and algebraic mastery.

<!-- separate learning boxes -->

> **தமிழில்:** விடைகளை மட்டும் நினைவில் கொள்ளாமல், ஒவ்வொரு கேள்வியிலும் பயன்படுத்தப்பட்ட கணித விதியை முழுமையாக எழுதிப் பார்க்கவும். விடுபட்ட எண்ணைத் திரும்பப் பிரதியிட்டு சரிபார்த்த பிறகே முழு மதிப்பெண் எடுக்க முடியும்.

---

## 11. ⚠️ Systematic Error Diagnostics & Revision Blueprint

### 11.1 Error Diagnosis & Precision Repair Table

| Common Mistake | Root Operational Cause | Precision Repair Action |
| :--- | :--- | :--- |
| **Testing Only 1 Example** | Premature convergence on a coincidental match. | Enforce mandatory verification on **all** remaining completed units before calculating the target. |
| **Assuming Operation Precedence** | Believing multiplication is "superior" to addition. | Operation hierarchy does not exist in puzzles; evidence from the problem defines the rule. |
| **Matrix Misorientation** | Reading a vertical column problem horizontally. | Identify whether largest numbers reside at row ends or column bases. |
| **Role Inversion in Subtraction** | Reversing order ($b - a$ instead of $a - b$). | Label cells with fixed coordinate names ($T, B, L, R$) and maintain directional flow. |
| **Ad-Hoc Constant Creep** | Shifting $+1$ to $+2$ without a justified progression. | Keep constants strictly invariant unless a secondary series explains the variation. |
| **Digit Splitting Violations** | Breaking numbers into digits despite explicit prohibitions. | Respect negative instructions; whole-number arithmetic takes mandatory priority. |
| **Forgetting Negative Roots** | Assuming $x^2 = 25 \implies x = 5$ only. | Recall that $x = \pm 5$; verify domain constraints (e.g., positive integer). |
| **Rounding Incomplete Divisions** | Approximating non-integers to match options. | Invariant arithmetic rules in SSC/RRB produce exact integers; re-evaluate your rule. |

---

### 11.2 Compact Decision Algorithm

> 🧠 **R12 Quick-Recall Executive Card:**
> 1. **Scan Constraints:** Whole numbers only? What is the blank's position?
> 2. **Identify Unit Frame:** Complete row, complete column, or discrete figure?
> 3. **Locate Extremes:** Are largest values at the bottom (column rule) or right (row rule)?
> 4. **Test Fundamental Ops:** Sum, difference, product, quotient.
> 5. **Test Compound Ops:** Product $\pm k$, sum of squares ($a^2 + b^2$), squared difference ($(a-b)^2$).
> 6. **Falsify Across All Sets:** Must hold $100\%$ across every completed unit.
> 7. **Solve Target Inversely:** If input is missing, reverse steps in reverse BODMAS order.

---

### 11.3 Personal Error Log Template

Maintain this structured error log during mock test revisions:

| Question ID / Source | My Initial Attempt & Flawed Rule | Actual Correct Invariant | Root Cause Category | Date of Re-Attempt |
| :--- | :--- | :--- | :--- | :---: |
| *Example: P1* | *Multiplied $2 \times 2 = 4$; guessed 28* | *Addition: $3+5=8 \implies 4+7=11$* | *Single-example bias* | *Day 7: Clean Pass* |
| `__` | `__` | `__` | `__` | `__` |
| `__` | `__` | `__` | `__` | `__` |

---

## 12. 📊 Module Coverage, Performance Scorecard & Next Steps

### R12 Syllabus & Exam Blueprint Coverage

| Core Exam Requirement | Detailed Chapter Coverage | Verification Status |
| :--- | :--- | :---: |
| **Missing Numbers in Rows, Columns & Grids** | Sections 4 & 5 (R1–R5, G1–G5) + Inverse Grids (Section 7) | ✅ 100% Comprehensive |
| **Geometric Figures & Grouped Relations** | Section 6: Triangles, 4-Direction Crosses, 8-Sector Wheels (F1–F5) | ✅ 100% Comprehensive |
| **Rule Consistency & Multi-Example Proof** | Section 3 (P1–P5) + Falsification Protocol | ✅ 100% Comprehensive |
| **Inverse Equation & Input Recovery** | Section 7 (I1–I5) + Algebraic Inversion Table | ✅ 100% Comprehensive |
| **Dated Official SSC Benchmarks** | Section 8: SSC CGL 2019 Shift 2 & SSC CGL 2020 Shift 1 PYQs | ✅ Verified & Recalculated |

---

### Your Progress Record — Fill After Mock Drills

| Verification Milestone | Target Criteria | Actual Student Record | Status |
| :--- | :---: | :---: | :---: |
| **Evidence Rejection Concept** | Explain why 1 example cannot prove a rule | Date: `__` | `Pending` |
| **Set A Diagnostic (10 Qs)** | $\ge 7/10$ ($70\%$) Untimed | Score: `__/10` | `Pending` |
| **Set B Application (5 Qs)** | $\ge 4/5$ ($80\%$) Untimed | Score: `__/5` | `Pending` |
| **Timed Mock Benchmark** | $\ge 80\%$ accuracy @ $\le 35\text{ sec/q}$ | Accuracy: `__%` \| Time: `__s` | `Pending` |
| **Day 7 Retention Review** | 100% Clean re-solve of logged errors | Date: `__` | `Pending` |
| **Day 21 Retention Review** | 100% Clean re-solve of logged errors | Date: `__` | `Pending` |

---

### Master Plan Transition

- **Previous Completed Modules:** [RF1 — Letters & Numbers](00-RF1-Letters-and-Numbers.md), [RF2 — Instructions & Relationships](00-RF2-Instructions-and-Relationships.md), [R01 — Analogy](01-R01-Analogy.md), [R04 — Classification](02-R04-Classification.md), [R07 — Series](03-R07-Series.md).
- **Current Completed Module:** **R12 — Finding the Missing Number**
- **Next in the Reasoning Roadmap:** **R08 — Coding-Decoding** (Mastering letter shifts, numeric substitutions, matrix codes, and deciphering positional ciphers).

```text
[R07 — Series] ──► [R12 — Finding Missing Number] ──► [R08 — Coding-Decoding]
   (Completed)                 (Current)                        (Next)
```

**R12 — Finding the Missing Number | Updated: 6 November 2026 | 25 Worked Analytical Models + 15 Independent Practice Challenges + 2 Verified SSC CGL PYQs | Progress: Ready for Diagnostic Evaluation**
