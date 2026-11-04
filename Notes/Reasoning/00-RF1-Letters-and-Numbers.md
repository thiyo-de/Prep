# RF1 — Reasoning Foundations: Letters & Numbers | எழுத்துகள் மற்றும் எண்கள்

> **Module Code:** `RF1` • **Target Exams:** SSC CGL / CHSL / RRB NTPC / Group D / State PSC  
> **Syllabus Anchor:** [Reasoning Master Checklist](../../Plan/Subject-Checklists/REASONING-CHECKLIST.md) • **Subject Area:** Reasoning Foundations (Pillar 1)  
> **Sequential Study Order:** **RF1 (Letters & Numbers)** $\longrightarrow$ **[RF2: Instructions & Relationships](00-RF2-Instructions-and-Relationships.md)** $\longrightarrow$ **[R01: Analogy](01-R01-Analogy.md)**

---

### How to Use These Notes

1. **Foundational Focus:** This module covers every core skill under item `RF1` in your syllabus checklist: forward/reverse counting, opposite alphabet pairs, number parity, primes, squares, cubes, and simple sequences.
2. **Speed Follows Understanding:** Never begin with a stopwatch. Understand the mathematical mechanism and spatial rule first; procedural recall speed develops naturally through spaced practice.
3. **Question Provenance:** The 30 worked models and 30 independent practice questions are original pedagogical exercises calibrated for SSC/RRB patterns. They build essential baseline fluency before attempting complex mixed PYQs.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      4-STAGE FOUNDATION LEARNING ROUTE                      │
└─────────────────────────────────────────────────────────────────────────────┘
  Stage 1: Alphabet Coordinate Engine (Forward/Reverse Positions & Opposites)
                                      │
                                      ▼
  Stage 2: Numerical Baseline (Parity Rules, Factors, Primes, Squares & Cubes)
                                      │
                                      ▼
  Stage 3: Positional Dynamics & Movement (Constant & Alternating Letter Shifts)
                                      │
                                      ▼
  Stage 4: Diagnostic Validation (30 Practice Challenges & Foundation Scorecard)
             [Passing Gate: ≥ 70% (21/30) Fresh Unaided Score]
```

<!-- separate learning boxes -->

> **தமிழில் வழிகாட்டுதல்:**
> - மனனம் செய்வதை விட விதிகளின் பின்னணியில் உள்ள காரணத்தைப் புரிந்துகொள்வது மிக முக்கியம்.
> - முன்னோக்கு மற்றும் பின்னோக்கு இடமதிப்புகள், எதிரெதிர் எழுத்துகள், பகா எண்கள், வர்க்கங்கள் மற்றும் கன மதிப்புகளை முதலில் தெளிவாகக் கற்றுக் கொள்ளுங்கள்.
> - 30 பயிற்சி வினாக்களையும் சுயமாகத் தீர்த்து, குறைந்தது 70% (21/30) மதிப்பெண் பெற்ற பின்னரே அடுத்த பாடத்திற்குச் செல்ல வேண்டும்.

---

### 🧭 Master Chapter Roadmap

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               MASTER CHAPTER ROADMAP: RF1                                        │
├──────────────────────┬──────────────────────┬──────────────────────┬─────────────────────────────┤
│ 1. ALPHABET ENGINE   │ 2. OPPOSITE PAIRS    │ 3. NUMBER PARITY     │ 4. PRIMES & POWERS          │
│ • 26 Numbered Seats  │ • Mirror Inversion   │ • Even / Odd Logic   │ • Factors & Composites      │
│ • Forward Pos (1-26) │ • $27 - p$ Formula   │ • Parity Arithmetic  │ • Primes up to 30           │
│ • Reverse Pos (26-1) │ • Order vs. Identity │ • Constant Δ Series  │ • Squares & Cubes Tables    │
├──────────────────────┴──────────────────────┴──────────────────────┴─────────────────────────────┤
│ 5. LETTER SEQUENCES & SHIFTS                                                                     │
│ • Constant Shifts (+k, -k) • Alternating Streams • Cyclic Modulo 26 Wraparound                   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 6. PRACTICE & FOUNDATION RECORD                                                                  │
│ • 30 Diagnostic Items (Sets A-F) • 4-Column Solutions • Mistake Repair Register                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. 🔤 Alphabet Positions: Forward & Reverse

### 1.1 The 26 Numbered Seats Model

Imagine the English alphabet sitting in a fixed row of 26 numbered seats from left to right. **Seat 1 is A; Seat 26 is Z.**
A **position** is a specific address in an ordered row, *not* the number of steps moved from a previous point!

| Analytical Term | Tamil Scientific Term | Operational Definition & Usage |
|---|---|---|
| **Position** | இடம் / இடமதிப்பு | Fixed coordinate address of an item in a sequence. |
| **Forward** | முன்னோக்கு | Left-to-right counting starting from $\text{A}=1 \to \text{Z}=26$. |
| **Reverse / Backward** | பின்னோக்கு | Right-to-left counting starting from $\text{Z}=1 \to \text{A}=26$. |
| **From the Left** | இடப்பக்கத்திலிருந்து | Measurement origin anchored at the beginning ($\text{A}$). |
| **From the Right** | வலப்பக்கத்திலிருந்து | Measurement origin anchored at the end ($\text{Z}$). |
| **Strictly Between** | இடையில் | Items strictly inside two endpoints (excluding both endpoints). |

```text
Forward (1-13):   A   B   C   D   E   F   G   H   I   J   K   L   M
Forward Pos:      1   2   3   4   5   6   7   8   9  10  11  12  13
Reverse Pos:     26  25  24  23  22  21  20  19  18  17  16  15  14
───────────────────────────────────────────────────────────────────
Forward (14-26):  N   O   P   Q   R   S   T   U   V   W   X   Y   Z
Forward Pos:     14  15  16  17  18  19  20  21  22  23  24  25  26
Reverse Pos:     13  12  11  10   9   8   7   6   5   4   3   2   1
```

> [!TIP]
> **Why Forward + Reverse Always Equals 27:**
> There are exactly 26 distinct letter positions. When you count to a specific letter from the left and also count to that same letter from the right, that letter has been **counted twice** (once in each direction).
> Therefore:
> $$\text{Total Sum} = 26 + 1 = 27$$
> 
> **Master Coordinate Formulas:**
> - $\text{Reverse Position} = 27 - \text{Forward Position}$
> - $\text{Forward Position} = 27 - \text{Reverse Position}$
> - *General Rule for any row of $n$ items:* $\text{Right Pos} = (n + 1) - \text{Left Pos}$

<!-- separate learning boxes -->

> **தமிழில்:**
> A-இலிருந்து எண்ணினால் முன்னோக்கு இடம் ($1 \to 26$). Z-இலிருந்து எண்ணினால் பின்னோக்கு இடம் ($1 \to 26$). ஒரே எழுத்தின் முன்னோக்கு மற்றும் பின்னோக்கு இடமதிப்புகளைக் கூட்டினால் எப்போதும் **27** வரும் ($26 + 1 = 27$).

---

### 1.2 Five Worked Models: Alphabet Coordinates

| Model ID | Problem Stem & Parameters | Analytical Derivation & Coordinate Proof | Official Key & Boundary Check |
|---|---|---|---|
| **P1**<br>`Forward` | **What is D's forward position?** | 1. Count from $\text{A}$: $\text{A}=1, \text{B}=2, \text{C}=3, \text{D}=4$.<br>2. The coordinate count includes $\text{D}$ itself.<br>3. Result: **4**. | **Selection:** **4**<br><br>✓ **Boundary Check:** Moving from $\text{A}$ to $\text{D}$ takes $3$ steps ($1+3=4$), but $\text{D}$'s positional address is $4$. |
| **P2**<br>`Reverse` | **What is H's reverse position?** | 1. $\text{H}$'s forward position is $8$.<br>2. Apply coordinate formula: $\text{Reverse} = 27 - 8 = 19$.<br>3. Result: **19**. | **Selection:** **19**<br><br>✓ **Boundary Check:** $8 + 19 = 27$. The letter identity remains invariant; only counting direction changes. |
| **P3**<br>`Right-to-Left` | **Which letter is 9th from the right in the normal alphabet?** | 1. Convert right-hand rank to forward rank: $27 - 9 = 18$.<br>2. Letter at forward position $18$ is $\mathbf{R}$.<br>3. Result: **R**. | **Selection:** **R**<br><br>✓ **Boundary Check:** Verifying directly from right: $\text{Z}(1), \text{Y}(2), \text{X}(3), \text{W}(4), \text{V}(5), \text{U}(6), \text{T}(7), \text{S}(8), \text{R}(9)$. |
| **P4**<br>`Between` | **How many letters are strictly between F and M?** | 1. Forward positions: $\text{F}=6$ and $\text{M}=13$.<br>2. Positional delta: $13 - 6 = 7$.<br>3. Exclude boundary endpoint: $7 - 1 = \mathbf{6}$ letters.<br>4. Result: **6** ($\text{G}, \text{H}, \text{I}, \text{J}, \text{K}, \text{L}$). | **Selection:** **6**<br><br>✓ **Boundary Check:** Counting $\text{F}$ through $\text{M}$ *inclusively* yields $8$ letters ($13 - 6 + 1$), an entirely different mathematical question! |
| **P5**<br>`Custom Row` | In the ordered row **A, C, E, G, I**, what is **G's position from the right?** | 1. Count total elements in row: $n = 5$ (not 26!).<br>2. Positional address of $\text{G}$ from the left: $4$th item.<br>3. Apply general formula: $\text{Right Pos} = (n + 1) - \text{Left Pos} = (5 + 1) - 4 = \mathbf{2}$. | **Selection:** **2**<br><br>✓ **Boundary Check:** Counting from right: $\text{I}$ is 1st, $\text{G}$ is 2nd. $\text{G}$'s standard alphabet position ($7$) is completely irrelevant to this arbitrary sub-row! |

> [!CAUTION]
> **The 4-Way Coordinate Trap:**
> Always distinguish:
> 1. Alphabet position ($1 \leftrightarrow 26$)
> 2. Positional rank inside a custom string/sub-row
> 3. Number of movement steps ($\Delta$)
> 4. Number of elements *strictly between* two endpoints ($\text{High} - \text{Low} - 1$)

---

## 2. 🪞 Opposite Letter Pairs: Spatial Mirror Inversion

### 2.1 The Equal-Distance Inversion Principle

The opposite of the first letter ($\text{A}$) is the first letter from the opposite end ($\text{Z}$). The opposite of the second letter ($\text{B}$) is the second letter from the opposite end ($\text{Y}$).

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                   COMPLEMENTARY OPPOSITE PAIRS MATRIX                       │
├─────────────────────────────────────────────────────────────────────────────┤
│   A ↔ Z   │   B ↔ Y   │   C ↔ X   │   D ↔ W   │   E ↔ V   │   F ↔ U   │
│   (1+26)  │   (2+25)  │   (3+24)  │   (4+23)  │   (5+22)  │   (6+21)  │
├───────────┼───────────┼───────────┼───────────┼───────────┼───────────┤
│   G ↔ T   │   H ↔ S   │   I ↔ R   │   J ↔ Q   │   K ↔ P   │   L ↔ O   │
│   (7+20)  │   (8+19)  │   (9+18)  │  (10+17)  │  (11+16)  │  (12+15)  │
├───────────┴───────────┴───────────┴───────────┴───────────┴───────────┤
│                               M ↔ N (13+14)                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

> [!NOTE]
> **Opposite Pair Formula:**
> If a letter sits at forward position $p$, its polar opposite letter sits at forward position:
> $$\text{Opposite Position} = 27 - p$$
> Consequently, the forward positions of any complementary pair must sum to **27**:
> $$p + (27 - p) = 27$$

### 2.1.1 String Reversal vs. Opposite Letter Replacement

| Operation on string "DOG" | Transformed Result | Exact Mechanical Change |
|---|:---:|---|
| **Reverse the String** | **`GOD`** | **Positional Sequence Only:** Characters are inverted ($3, 2, 1$); letter identities are untouched. |
| **Replace by Opposites** | **`WLT`** | **Letter Identities Only:** $\text{D} \to \text{W}$, $\text{O} \to \text{L}$, $\text{G} \to \text{T}$; original reading sequence ($1, 2, 3$) is preserved. |
| **Reverse AND Replace** | **`TLW`** | **Both Sequence and Identity:** Composite transformation. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **பின்னோக்கு இடமதிப்பு (Reverse Position):** என்பது ஒரு எண் ($27 - p$).
> - **எதிர் எழுத்து (Opposite Letter):** என்பது அந்த எண்ணுக்குரிய மற்றொரு ஆங்கில எழுத்து.
> - சொல்லைத் தலைகீழாக மாற்றுவது (Reversal) வேறு; ஒவ்வொரு எழுத்தின் எதிரெழுத்தை மாற்றி எழுதுவது (Opposite substitution) வேறு!

---

### 2.2 Five Worked Models: Opposite Letter Transformations

| Model ID | Problem Stem & Parameters | Analytical Derivation & Operational Proof | Official Key & Boundary Check |
|---|---|---|---|
| **O1**<br>`Direct Opposite` | **Find the opposite of C.** | 1. $\text{C} = 3$.<br>2. Opposite coordinate: $27 - 3 = 24$.<br>3. 24th letter in alphabet is $\mathbf{X}$.<br>4. Result: **X**. | **Selection:** **X**<br><br>✓ **Boundary Check:** Both $\text{C}$ and $\text{X}$ sit exactly 3 seats away from their respective alphabet boundaries ($\text{A}$ and $\text{Z}$). |
| **O2**<br>`Symmetry` | **Find the opposite of P.** | 1. $\text{P} = 16$.<br>2. Opposite coordinate: $27 - 16 = 11$.<br>3. 11th letter in alphabet is $\mathbf{K}$.<br>4. Result: **K**. | **Selection:** **K**<br><br>✓ **Boundary Check:** $16 + 11 = 27$. The opposite operation is completely reflexive: $\text{Opposite}(\text{K}) = \text{P}$. |
| **O3**<br>`String Mapping` | **Replace every letter of CAT by its opposite, preserving order.** | 1. $\text{C}(3) \to 27 - 3 = 24 \implies \mathbf{X}$.<br>2. $\text{A}(1) \to 27 - 1 = 26 \implies \mathbf{Z}$.<br>3. $\text{T}(20) \to 27 - 20 = 7 \implies \mathbf{G}$.<br>4. Result: **XZG**. | **Selection:** **XZG**<br><br>✓ **Boundary Check:** `TAC` is string reversal without character substitution; `XZG` preserves sequence and updates identities. |
| **O4**<br>`Double Inversion` | **Apply opposite-letter replacement twice to BIRD.** | 1. 1st replacement: $\text{B} \to \text{Y}, \text{I} \to \text{R}, \text{R} \to \text{I}, \text{D} \to \text{W} \implies \text{YRIW}$.<br>2. 2nd replacement: $\text{Y} \to \text{B}, \text{R} \to \text{I}, \text{I} \to \text{R}, \text{W} \to \text{D} \implies \mathbf{BIRD}$. | **Selection:** **BIRD**<br><br>✓ **Boundary Check:** Mathematically, $27 - (27 - p) = p$. Applying the reflection twice acts as the identity operator ($f(f(x)) = x$). |
| **O5**<br>`Self-Opposite Check` | **Can any English letter be its own opposite under this rule?** | 1. Set self-opposite equation: $p = 27 - p$.<br>2. Solve for $p$: $2p = 27 \implies p = 13.5$.<br>3. Alphabet positional indices are strictly discrete positive integers ($p \in \mathbb{Z}^+$).<br>4. Result: **No**. | **Selection:** **No**<br><br>✓ **Boundary Check:** The middle boundary splits between $\text{M}(13)$ and $\text{N}(14)$; they form a mutual complementary pair ($\text{M} \leftrightarrow \text{N}$). |

## 3. 🔢 Number Parity & Arithmetic Sequences

### 3.1 Mathematical Definitions of Parity

An **integer** ($\mathbb{Z}$ / *முழு எண்*) possesses no fractional or decimal component:
$$\dots, -3, -2, -1, 0, 1, 2, 3, \dots$$

- **Even Integer (*இரட்டை எண்*):** Exactly divisible by $2$ with zero remainder ($\text{Remainder} = 0$). Algebraic form: $2k$ (where $k \in \mathbb{Z}$). Examples: $0, 2, 4, 6, 8, -2, -4$.
- **Odd Integer (*ஒற்றை எண்*):** Yields a remainder of $1$ when divided by $2$ ($\text{Remainder} = 1$). Algebraic form: $2k + 1$ (where $k \in \mathbb{Z}$). Examples: $1, 3, 5, 7, -1, -3$.
- **Zero ($\mathbf{0}$):** Zero is an **even integer** because $0 = 2 \times 0$ (remainder is $0$). Note that zero is even, but it is *neither positive nor negative*.
- **Decimal Fractions:** Numbers with fractional parts (e.g. $2.5$, $0.75$) do not possess parity status; odd/even classification applies strictly to integers.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       ARITHMETIC PARITY LOGIC ENGINE                        │
├──────────────────────────────┬──────────────────────────────┬───────────────┤
│ Addition / Subtraction Rule  │ Multiplicative Parity Rule   │ Division Trap │
├──────────────────────────────┼──────────────────────────────┼───────────────┤
│ • Even $\pm$ Even = **Even** │ • Even $\times$ Any = **Even**│ • Even ÷ Even │
│ • Odd $\pm$ Odd   = **Even** │ • Odd $\times$ Odd  = **Odd** │   is volatile!│
│ • Odd $\pm$ Even  = **Odd**  │                              │ ($6÷2=3$ Odd, │
│ • Even $\pm$ Odd  = **Odd**  │                              │  $8÷2=4$ Even,│
│                              │                              │  $2÷4=0.5$ N/A│
└──────────────────────────────┴──────────────────────────────┴───────────────┘
```

> [!NOTE]
> **Why Odd + Odd Always Equals Even:**
> Any odd integer can be visualized as grouped pairs of $2$ with exactly **one leftover single item**.
> When you add two odd numbers together:
> $$\text{Odd}_1 + \text{Odd}_2 = (2a + 1) + (2b + 1) = 2a + 2b + 2 = 2(a + b + 1)$$
> The two leftover single units combine to form a brand-new complete pair, eliminating the remainder!

### 3.2 Reading & Dissecting Sequential Patterns

A **term (*உறுப்பு*)** is an individual element in a sequence (*வரிசை*). A **difference ($\Delta$ / *வித்தியாசம்*)** represents the subtractive change between adjacent terms ($T_{n} - T_{n-1}$). A **constant (*மாறிலி*)** remains invariant throughout the progression.

```text
Progression:   4 ─────▶ 7 ─────▶ 10 ─────▶ 13 ─────▶ [16]
Delta (Δ):        +3       +3        +3        +3
```

> [!CAUTION]
> **Sequential Verification Protocol:**
> Always compute the difference across **every single given transition**, not merely the first two terms! A pattern exhibiting $+3$ between terms 1 and 2 might transition into $+4, +5$ or alternate $+3, -1$.

<!-- separate learning boxes -->

> **தமிழில்:**
> - பூஜ்யம் ($0$) என்பது ஓர் இரட்டை முழு எண் ($2 \times 0 = 0$).
> - இரு ஒற்றை எண்களைக் கூட்டினால் எப்போதும் இரட்டை எண் கிடைக்கும் ($\text{Odd} + \text{Odd} = \text{Even}$).
> - தொடர் வரிசைகளில் முதல் இரண்டு எண்களை மட்டும் பார்க்காமல், கொடுக்கப்பட்டுள்ள அனைத்து எண்களின் மாற்றங்களையும் சோதிக்க வேண்டும்.

---

### 3.3 Five Worked Models: Number Parity & Simple Sequences

| Model ID | Problem Stem & Parameters | Analytical Derivation & Parity Proof | Official Key & Boundary Check |
|---|---|---|---|
| **E1**<br>`Parity of Zero` | **Is 0 odd or even?** | 1. Apply formal mathematical divisibility by 2.<br>2. $0 = 2 \times 0$ with remainder $r = 0$.<br>3. Result: **Even**. | **Selection:** **Even**<br><br>✓ **Boundary Check:** $0$ is an even integer, but it is neither a positive integer nor a negative integer. |
| **E2**<br>`Sum Parity` | **Is $137 + 245$ odd or even, without computing full addition?** | 1. Inspect unit digits: $137$ ends in $7$ (Odd); $245$ ends in $5$ (Odd).<br>2. Parity rule: $\text{Odd} + \text{Odd} = \text{Even}$.<br>3. Result: **Even** ($137 + 245 = 382$, ends in 2). | **Selection:** **Even**<br><br>✓ **Boundary Check:** Final unit digit parity determines total sum parity independently of the number of digits. |
| **E3**<br>`Mixed Expression` | **Is $17 \times 24 + 5$ odd or even?** | 1. Order of operations: Evaluate multiplication first ($17 \times 24$).<br>2. $24$ is even $\implies 17 \times 24 = \text{Even}$ ($408$).<br>3. Now evaluate addition: $\text{Even} + \text{Odd}(5) = \mathbf{Odd}$ ($413$). | **Selection:** **Odd**<br><br>✓ **Boundary Check:** Never determine parity using only the first ($17$) or last ($5$) token in an arithmetic expression! |
| **E4**<br>`Constant Delta` | **Continue: 7, 11, 15, 19, ? using a constant difference.** | 1. Compute consecutive deltas: $11-7=4$, $15-11=4$, $19-15=4$.<br>2. Invariant constant delta is $+4$.<br>3. Next term: $19 + 4 = \mathbf{23}$. | **Selection:** **23**<br><br>✓ **Boundary Check:** Although all terms are odd, guessing "next consecutive odd number" ($21$) violates the empirically proven $+4$ offset. |
| **E5**<br>`Alternating Delta` | **Continue: 2, 5, 4, 7, 6, 9, ? using alternating +3 and −1.** | 1. Calculate each step transition: $2(+3) \to 5(-1) \to 4(+3) \to 7(-1) \to 6(+3) \to 9$.<br>2. The next transition must be $-1$: $9 - 1 = \mathbf{8}$.<br>3. Method 2 (Dual Stream): Odd positions: $2, 4, 6, \mathbf{8}$; Even positions: $5, 7, 9$. | **Selection:** **8**<br><br>✓ **Boundary Check:** Both transition tracking and interleaved twin-stream analysis converge on the identical output $8$. |

---

## 4. 🧮 Prime & Composite Numbers

### 4.1 Factors, Multiples, and Primes

- **Factor (*காரணி*):** An integer that divides another number exactly without a remainder ($12 \div 3 = 4 \implies 3$ is a factor of $12$).
- **Multiple (*மடங்கு*):** The product of an integer multiplied by an integer ($3 \times 4 = 12 \implies 12$ is a multiple of $3$).
- **Prime Number (*பகா எண்*):** A positive integer strictly greater than $1$ that has **exactly two distinct positive divisors**: $1$ and itself.
- **Composite Number (*பகு எண்*):** A positive integer strictly greater than $1$ that has **more than two positive divisors**.
- **The Number 1:** $1$ is **NEITHER prime NOR composite** because it has only one positive factor ($1$).
- **The Number 0:** $0$ is **NEITHER prime NOR composite** (not a positive integer).

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                     PRIME NUMBERS STARTER BANK (P ≤ 30)                     │
├─────────────────────────────────────────────────────────────────────────────┤
│         2,   3,   5,   7,   11,   13,   17,   19,   23,   29              │
└─────────────────────────────────────────────────────────────────────────────┘
```

> [!CAUTION]
> **The Even Prime Trap:**
> - $\mathbf{2}$ is the **only even prime number** in the universe!
> - Every prime number greater than $2$ is odd.
> - *Reverse fallacy:* NOT all odd numbers are prime! Numbers like $9$ ($3 \times 3$), $15$ ($3 \times 5$), $21$ ($3 \times 7$), and $25$ ($5 \times 5$) are odd but **composite**.

### 4.2 The Square Root Factor Testing Boundary ($\sqrt{n}$)

To determine whether an integer $n$ is prime, you do not need to test every integer up to $n$.
Test divisibility only by prime numbers up to $\mathbf{\sqrt{n}}$:
$$\text{Test Divisors: } p \le \sqrt{n} \quad (\text{or } p^2 \le n)$$

> [!TIP]
> **Mathematical Proof:**
> If $n = a \times b$, both factors $a$ and $b$ cannot be strictly greater than $\sqrt{n}$ simultaneously (otherwise $a \times b > \sqrt{n} \times \sqrt{n} = n$).
> Therefore, if $n$ is composite, at least one factor must be $\le \sqrt{n}$. If no prime $\le \sqrt{n}$ divides $n$, then $n$ is unconditionally prime!

<!-- separate learning boxes -->

> **தமிழில்:**
> - பகா எண் என்பது $1$ மற்றும் அதே எண்ணால் மட்டுமே வகுபடக்கூடிய $1$-ஐ விடப் பெரிய எண்.
> - $2$ மட்டுமே ஒரே இரட்டைப் பகா எண்.
> - $1$ என்பது பகா எண்ணும் அல்ல, பகு எண்ணும் அல்ல!
> - ஒரு சிறிய எண்ணை சோதிக்க, அதன் வர்க்கமூலம் ($\sqrt{n}$) வரையிலான பகா எண்களால் வகுபடுகிறதா என்று பார்த்தால் போதுமானது.

---

### 4.3 Five Worked Models: Primes & Factor Testing

| Model ID | Problem Stem & Parameters | Analytical Derivation & Factor Proof | Official Key & Boundary Check |
|---|---|---|---|
| **R1**<br>`Parity Exception` | **Is 2 prime?** | 1. Positive divisors of 2: Exactly $1$ and $2$.<br>2. Total count of divisors: Exactly two distinct divisors.<br>3. Magnitude: $2 > 1$.<br>4. Result: **Prime**. | **Selection:** **Prime**<br><br>✓ **Boundary Check:** Being even does not disqualify $2$; it is the sole even prime number. |
| **R2**<br>`Boundary Token` | **Is 1 prime?** | 1. Divisors of 1: Only $1$.<br>2. Total count of divisors: Only one positive divisor.<br>3. Definition requires exactly two distinct factors.<br>4. Result: **Neither prime nor composite**. | **Selection:** **Neither prime nor composite**<br><br>✓ **Boundary Check:** Popular phrasing "divisible by 1 and itself" names the same single factor twice for 1. |
| **R3**<br>`Odd Composite` | **Is 21 prime?** | 1. $21$ is odd (not divisible by 2).<br>2. Divisibility check: $21 = 3 \times 7$.<br>3. Factors: $1, 3, 7, 21$ (Four divisors).<br>4. Result: **Composite**. | **Selection:** **Composite**<br><br>✓ **Boundary Check:** Odd parity is a necessary condition for primes $>2$, but never a sufficient condition! |
| **R4**<br>`Square Root Test` | **Is 29 prime?** | 1. Estimate square root: $5^2 = 25 < 29 < 36 = 6^2 \implies \sqrt{29} \approx 5.38$.<br>2. Prime test candidates $\le 5$: Primes $2, 3, 5$.<br>3. Testing: $29$ is odd (fails 2); $2+9=11$ (fails 3); ends in 9 (fails 5).<br>4. Testing $7$ is unnecessary ($7^2 = 49 > 29$). Result: **Prime**. | **Selection:** **Prime**<br><br>✓ **Boundary Check:** If no prime divisor exists up to $\sqrt{n}$, higher divisors are mathematically impossible. |
| **R5**<br>`Uniqueness` | **A number has exactly two positive factors and is even. What is it?** | 1. "Exactly two positive factors" $\implies$ Must be a prime number.<br>2. "Is even" $\implies$ Even prime.<br>3. Any even integer $>2$ has at least three factors ($1, 2, n$) and is composite.<br>4. Result: **2**. | **Selection:** **2**<br><br>✓ **Boundary Check:** $2$ is the unique solution satisfying both algebraic constraints simultaneously. |

---

## 5. 🟦 Squares, Cubes & Exponential Growth

### 5.1 Repeated Multiplication of Equal Factors

- **Perfect Square (*வர்க்கம்*):** The product of an integer multiplied by itself:
  $$n^2 = n \times n \quad (\text{Represents area of an } n \times n \text{ square})$$
- **Perfect Cube (*கன மதிப்பு*):** The product of an integer used as 3 equal factors:
  $$n^3 = n \times n \times n \quad (\text{Represents volume of an } n \times n \times n \text{ cube})$$
- **Base & Exponent (*அடிமானம் & அடுக்கு*):**
  $$3^2 = 3 \times 3 = 9 \quad (\text{NOT } 3 \times 2 = 6!)$$
  $$3^3 = 3 \times 3 \times 3 = 27 \quad (\text{NOT } 3 \times 3 = 9!)$$

### 5.1.1 Rapid Recall Memorization Tables

#### A. Squares & Cubes ($1 \le n \le 10$)

| $n$ | Base Formula | Square ($n^2$) | Cube ($n^3$) | Base Exponent Expansion |
|:---:|---|:---:|:---:|---|
| **1** | $1 \times 1$ | **1** | **1** | $1 \times 1 \times 1$ |
| **2** | $2 \times 2$ | **4** | **8** | $2 \times 2 \times 2$ |
| **3** | $3 \times 3$ | **9** | **27** | $3 \times 3 \times 3$ |
| **4** | $4 \times 4$ | **16** | **64** | $4 \times 4 \times 4$ |
| **5** | $5 \times 5$ | **25** | **125** | $5 \times 5 \times 5$ |
| **6** | $6 \times 6$ | **36** | **216** | $6 \times 6 \times 6$ |
| **7** | $7 \times 7$ | **49** | **343** | $7 \times 7 \times 7$ |
| **8** | $8 \times 8$ | **64** | **512** | $8 \times 8 \times 8$ |
| **9** | $9 \times 9$ | **81** | **729** | $9 \times 9 \times 9$ |
| **10** | $10 \times 10$ | **100** | **1000** | $10 \times 10 \times 10$ |

#### B. Higher Squares ($11 \le n \le 20$)

| $n$ | **11** | **12** | **13** | **14** | **15** | **16** | **17** | **18** | **19** | **20** |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **$n^2$** | **121** | **144** | **169** | **196** | **225** | **256** | **289** | **324** | **361** | **400** |

<!-- separate learning boxes -->

> **தமிழில்:**
> - வர்க்கம் ($n^2$) என்பது ஒரு எண்ணை அதே எண்ணால் ஒரு முறை பெருக்குவது ($n \times n$).
> - கன மதிப்பு ($n^3$) என்பது அதே எண்ணை மூன்று முறை பெருக்குவது ($n \times n \times n$).
> - அடுக்கை சாதாரண பெருக்கலாக தவறாக எண்ணக் கூடாது ($4^3 \neq 12$; $4^3 = 64$).
> - $0^2 = 0$, $0^3 = 0$.

---

### 5.2 Five Worked Models: Powers & Polynomial Progressions

| Model ID | Problem Stem & Parameters | Analytical Derivation & Operational Proof | Official Key & Boundary Check |
|---|---|---|---|
| **S1**<br>`Direct Square` | **Find 8².** | 1. Expand exponent: $8^2 = 8 \times 8$.<br>2. Multiply: $64$.<br>3. Result: **64**. | **Selection:** **64**<br><br>✓ **Boundary Check:** $8 \times 2 = 16$ doubles the number; squaring multiplies the number by itself. |
| **S2**<br>`Direct Cube` | **Find 4³.** | 1. Expand exponent: $4^3 = 4 \times 4 \times 4$.<br>2. First step: $4 \times 4 = 16$.<br>3. Second step: $16 \times 4 = 64$.<br>4. Result: **64**. | **Selection:** **64**<br><br>✓ **Boundary Check:** $4 \times 3 = 12$ computes a scalar multiple; cubing requires three equal factors. |
| **S3**<br>`Dual Status` | **Is 64 a perfect square, a perfect cube, both or neither?** | 1. Test square: $8 \times 8 = 64 \implies$ Perfect square ($8^2$).<br>2. Test cube: $4 \times 4 \times 4 = 64 \implies$ Perfect cube ($4^3$).<br>3. Mathematical link: $64 = 2^6 = (2^3)^2 = (2^2)^3$.<br>4. Result: **Both**. | **Selection:** **Both**<br><br>✓ **Boundary Check:** Mathematical properties can overlap; proving a number is a square does not preclude it from being a cube. |
| **S4**<br>`Polynomial Series` | **Continue: 2, 5, 10, 17, ? if term $n$ is $n^2 + 1$, starting at $n = 1$.** | 1. Verify index formula:<br>   • $n=1: 1^2+1 = 2$<br>   • $n=2: 2^2+1 = 5$<br>   • $n=3: 3^2+1 = 10$<br>   • $n=4: 4^2+1 = 17$<br>2. Compute $n=5$: $5^2 + 1 = 25 + 1 = \mathbf{26}$. | **Selection:** **26**<br><br>✓ **Boundary Check:** The formula squares the positional index $n=5$, NOT the previous term value $17$ ($17^2+1 = 290$). |
| **S5**<br>`Sandwich Test` | **Is 50 a perfect square?** | 1. Identify surrounding consecutive integer squares:<br>   • $7^2 = 49$<br>   • $8^2 = 64$<br>2. Proximity: $49 < 50 < 64$.<br>3. No integer exists between $7$ and $8$.<br>4. Result: **No**. | **Selection:** **No**<br><br>✓ **Boundary Check:** Being close to a perfect square ($50 = 49 + 1$) or being even does not make a number a perfect square. |

## 6. ➡️ Letter Sequences & Positional Shifts

### 6.1 The 4-Step Vector Translation Protocol: Convert, Compare, Apply, Verify

When tracking alphabet sequences, never attempt mental guessing. Translate letters into their numerical forward positions ($1 \leftrightarrow 26$) to make the arithmetic delta instantly visible:

```text
Letters:        C ─────────▶ F ─────────▶ I ─────────▶ L ─────────▶ [O]
Forward Pos:    3            6            9           12            [15]
Positional Δ:       +3           +3           +3           +3
```

> [!TIP]
> **Shift ($\Delta$) vs. Intervening Letters:**
> A positional shift of **$+3$** advances $3$ seats ($\text{C}_3 \to \text{F}_6$). It passes over **exactly two intermediate letters** ($\text{D}, \text{E}$).
> Never confuse a $+k$ coordinate jump with *"there are $k$ letters between them"*!

### 6.1.1 Core Alphabet Movement Taxonomy

| Sequential Movement Model | Invariant Rule Pattern | Standard Analytical Demonstration |
|---|---|---|
| **Constant Forward/Backward Shift** | The identical positional delta ($\pm k$) is applied at every successive transition. | $\text{B}_2(+3) \to \text{E}_5(+3) \to \text{H}_8$ |
| **Monotonically Increasing Gaps** | The positional delta increases deterministically ($+2, +3, +4, +5$). | $\text{A}_1(+2) \to \text{C}_3(+3) \to \text{F}_6(+4) \to \text{J}_{10}$ |
| **Alternating Interleaved Streams** | Odd-indexed terms and even-indexed terms advance along independent coordinate vectors. | Odd: $+2$; Even: $-2$ |
| **String Shift Transformation** | A specified shift is applied independently to every character in the string token. | $\text{DOG}(+1) \to \text{EPH}$ |
| **Cyclic Wraparound Modulo 26** | $\text{Z}(26) + 1 \to \text{A}(1)$ occurs **only** when modular circularity is declared in prompt. | $\text{YZ}(+2) \to \text{AB}$ |

> [!CAUTION]
> **Counting Movement Steps Correctly:**
> To advance $2$ letters past $\text{H}$:
> - Step 1: $\text{I}$
> - Step 2: $\mathbf{J}$
> $\text{H}$ is the **origin anchor (Step 0)**, NOT Step 1!

<!-- separate learning boxes -->

> **தமிழில்:**
> - எழுத்துகளின் தொடரைக் காணும்போது, முதலில் அவற்றின் இடமதிப்புகளை எண்களாக மாற்றிக் கொள்ள வேண்டும்.
> - $+3$ நகர்வு என்றால் இடையில் இரண்டு எழுத்துகள் இருக்கும்.
> - தொடக்க எழுத்தை $0$ எனக் கொண்டு, அடுத்தடுத்த அடிகளை எண்ண வேண்டும்.

---

### 6.2 Five Worked Models: Positional Shift Dynamics

| Model ID | Problem Stem & Parameters | Analytical Derivation & Operational Proof | Official Key & Boundary Check |
|---|---|---|---|
| **L1**<br>`Constant Forward` | **Continue: B, E, H, K, ? using one constant shift.** | 1. Numerical coordinates: $2, 5, 8, 11$.<br>2. Calculate gaps: $5-2 = +3, 8-5 = +3, 11-8 = +3$.<br>3. Next coordinate: $11 + 3 = 14 \to \mathbf{N}$. | **Selection:** **N**<br><br>✓ **Boundary Check:** There are 2 letters strictly between each step, but the positional coordinate shift is $+3$. |
| **L2**<br>`Constant Backward` | **Continue: Y, V, S, P, ? using one constant shift.** | 1. Numerical coordinates: $25, 22, 19, 16$.<br>2. Calculate gaps: $22-25 = -3, 19-22 = -3, 16-19 = -3$.<br>3. Next coordinate: $16 - 3 = 13 \to \mathbf{M}$. | **Selection:** **M**<br><br>✓ **Boundary Check:** Direction vector is strictly regressive ($-3$); do not inadvertently reverse direction to $+3$. |
| **L3**<br>`Expanding Gaps` | **Continue: A, C, F, J, ? if forward gaps increase by 1 each time.** | 1. Numerical coordinates: $1, 3, 6, 10$.<br>2. Calculate gaps: $+2, +3, +4$.<br>3. Next delta must be $+5$: $10 + 5 = 15 \to \mathbf{O}$. | **Selection:** **O**<br><br>✓ **Boundary Check:** Monotonically expanding gaps ($+2, +3, +4, +5$) are fundamentally distinct from static uniform shifts. |
| **L4**<br>`Interleaved Streams` | **Continue: A, Z, C, X, E, V, ? using two alternating sequences.** | 1. Deconstruct into interleaved streams:<br>   • Odd Stream (Positions 1, 3, 5, 7): $\text{A}_1, \text{C}_3, \text{E}_5 \implies (+2) \to \mathbf{G}_7$.<br>   • Even Stream (Positions 2, 4, 6, 8): $\text{Z}_{26}, \text{X}_{24}, \text{V}_{22} \implies (-2) \to \text{T}_{20}$.<br>2. Target is 7th element: Belongs to Odd Stream $\to \mathbf{G}$. | **Selection:** **G**<br><br>✓ **Boundary Check:** The 8th term would be $\text{T}$ in the declining even stream. Always track stream parity! |
| **L5**<br>`Cyclic Wraparound` | **Shift every letter of YZ forward by 2 under an explicitly cyclic alphabet.** | 1. Character 1 ($\text{Y}_{25}$): $25 \to 26(\text{Z}) \to 1(\mathbf{A})$.<br>2. Character 2 ($\text{Z}_{26}$): $26 \to 1(\text{A}) \to 2(\mathbf{B})$.<br>3. Combine: **AB**. | **Selection:** **AB**<br><br>✓ **Boundary Check:** Without explicit circularity/wraparound instructions in the stem, never assume modular wrapping beyond $\text{Z}$. |

---

## 7. ✍️ Independent Practice: 30 Benchmark Diagnostic Challenges

> [!IMPORTANT]
> **Diagnostic Protocol:**
> Attempt all 30 questions completely unaided before consulting Section 8. Document your operational method for every item.

---

### Set A: Alphabet Coordinates (Questions 1 to 5)

<details open>
<summary><b>View Set A Challenges (Questions 1 to 5)</b></summary>

| Q# | Problem Stem | Parameter Context | Primary Skill |
|:---:|---|---|---|
| **01** | **What is J's forward position?** | Standard English Alphabet | Forward Coordinate Identification |
| **02** | **What is D's reverse position?** | Full 26-Letter Alphabet | Reverse Coordinate Formula ($27-p$) |
| **03** | **Which letter is 12th from the right in the full alphabet?** | Normal Alphabet Order | Right-to-Left Conversion |
| **04** | **How many letters are strictly between H and P?** | Endpoints Excluded | Non-Inclusive Interval Counting |
| **05** | In the custom row **Q, W, E, R, T, Y**, what is **R's position from the right?** | Row of $n=6$ Elements | General Positional Formula ($n+1-p$) |

</details>

---

### Set B: Complementary Opposite Pairs (Questions 6 to 10)

<details open>
<summary><b>View Set B Challenges (Questions 6 to 10)</b></summary>

| Q# | Problem Stem | Operational Requirement | Primary Skill |
|:---:|---|---|---|
| **06** | **Find the opposite of F.** | Single Letter Inversion | Complementary Opposites ($27-p$) |
| **07** | **Find the opposite of W.** | Single Letter Inversion | Complementary Opposites ($27-p$) |
| **08** | **Replace every letter of PEN by its alphabet opposite, keeping order.** | Character String Mapping | Sequence-Preserving Substitution |
| **09** | **Apply opposite-letter replacement twice to MAP. What remains?** | Double Inversion Operator | Identity Operator Invariance |
| **10** | **Does the pair J : R form an opposite pair? If not, state the correct opposite of J.** | Mathematical Pair Verification | Complementary Sum Check ($p_1+p_2=27$) |

</details>

---

### Set C: Number Parity & Arithmetic Sequences (Questions 11 to 15)

<details open>
<summary><b>View Set C Challenges (Questions 11 to 15)</b></summary>

| Q# | Problem Stem | Analytical Constraint | Primary Skill |
|:---:|---|---|---|
| **11** | **Is 408 odd or even?** | Justify via Divisibility Rule | Parity of Multi-Digit Integers |
| **12** | **Is $35 + 47$ odd or even?** | Deduce via Parity Rule | Sum of Odd Integers ($\text{Odd}+\text{Odd}$) |
| **13** | **Is $19 \times 12 - 3$ odd or even?** | Evaluate via Operational Hierarchy | Mixed Parity Arithmetic Expression |
| **14** | **Continue: 6, 11, 16, 21, ?** | Constant Difference Model | Constant Delta Arithmetic Progression |
| **15** | **Continue: 3, 7, 6, 10, 9, 13, ?** | Alternating Transitions $+4, -1$ | Interleaved Alternating Delta Series |

</details>

---

### Set D: Factors, Primes & Composites (Questions 16 to 20)

<details open>
<summary><b>View Set D Challenges (Questions 16 to 20)</b></summary>

| Q# | Problem Stem | Theoretical Requirement | Primary Skill |
|:---:|---|---|---|
| **16** | **Which are prime: 1, 2, 9, 13, 15?** | Filter by Factor Count Definition | Prime Identification & Traps ($1, 2$) |
| **17** | **List all positive factors of 15 and classify it.** | Enumerate Complete Divisor Set | Prime vs. Composite Classification |
| **18** | **Is 23 prime? Show which small prime divisors must be checked.** | Apply Square Root Testing Limit ($\sqrt{n}$) | Divisibility Boundary Efficiency |
| **19** | **Can an even integer greater than 2 be prime? Explain why.** | Formal Proof via Divisibility | Uniqueness of Even Prime $2$ |
| **20** | **The sum of two odd primes must be odd or even?** | Parity Rule Application | Prime Algebraic Parity Property |

</details>

---

### Set E: Squares, Cubes & Polynomial Powers (Questions 21 to 25)

<details open>
<summary><b>View Set E Challenges (Questions 21 to 25)</b></summary>

| Q# | Problem Stem | Computational Parameters | Primary Skill |
|:---:|---|---|---|
| **21** | **Find 12².** | Direct Integer Square | Perfect Square Computation |
| **22** | **Find 6³.** | Three Equal Factor Multiplication | Perfect Cube Computation |
| **23** | **Is 125 a perfect square, a perfect cube, both or neither?** | Integer Factor Decomposition | Power Taxonomy Disambiguation |
| **24** | **Continue: 3, 6, 11, 18, ? if term $n$ is $n^2 + 2$, starting at $n = 1$.** | Evaluate at Index $n=5$ | Polynomial Sequence Mapping |
| **25** | **Is 90 a perfect square? Name the two consecutive squares around it.** | Sandwich Inequality Estimation | Square Proximity Testing |

</details>

---

### Set F: Letter Shifts & Cyclic Sequences (Questions 26 to 30)

<details open>
<summary><b>View Set F Challenges (Questions 26 to 30)</b></summary>

| Q# | Problem Stem | Transformation Rule | Primary Skill |
|:---:|---|---|---|
| **26** | **Continue: D, G, J, M, ?** | Constant Coordinate Shift | Forward Uniform Alphabet Shift |
| **27** | **Continue: W, S, O, K, ?** | Constant Negative Shift | Backward Uniform Alphabet Shift |
| **28** | **Continue: B, D, G, K, ?** | Expanding Gaps Starting from $+2$ | Monotonically Increasing Gap Progression |
| **29** | **Continue: B, Y, D, W, F, U, ?** | Alternating Dual Streams ($+2, -2$) | Interleaved Twin Alphabet Progression |
| **30** | **Shift XZ forward by 3 in an explicitly cyclic alphabet.** | Modular Circularity ($\text{Z} \to \text{A}$) | Cyclic Modulo 26 Boundary Wraparound |

</details>

---

## 8. ✅ Comprehensive Diagnostic Solutions & Answer Matrix

### 8.1 Master 4-Column Diagnostic Solutions (Q01 to Q30)

| Q# | Official Key | Sub-Skill Domain | Complete Analytical Proof & Boundary Check |
|:---:|:---:|---|---|
| **01** | **10** | Forward Coordinates | Count forward from $\text{A}=1 \implies \text{J} = \mathbf{10}$. |
| **02** | **23** | Reverse Coordinates | $\text{D}=4$. Apply formula: $27 - 4 = \mathbf{23}$. |
| **03** | **O** | Right-to-Left Conversion | Forward position $= 27 - 12 = 15$. Letter at position 15 is $\mathbf{O}$. |
| **04** | **7** | Interval Counting | $\text{H}=8, \text{P}=16$. Non-inclusive count: $16 - 8 - 1 = \mathbf{7}$ letters ($\text{I}, \text{J}, \text{K}, \text{L}, \text{M}, \text{N}, \text{O}$). |
| **05** | **3** | Custom Row Inversion | Total $n=6$. $\text{R}$ is 4th from left. Right position $= (6 + 1) - 4 = \mathbf{3}$ ($\text{Y}=1, \text{T}=2, \text{R}=3$). |
| **06** | **U** | Complementary Opposites | $\text{F}=6$. Opposite coordinate: $27 - 6 = 21 \to \mathbf{U}$. |
| **07** | **D** | Complementary Opposites | $\text{W}=23$. Opposite coordinate: $27 - 23 = 4 \to \mathbf{D}$. |
| **08** | **KVM** | Sequence String Opposites | $\text{P}(16) \to \text{K}(11)$, $\text{E}(5) \to \text{V}(22)$, $\text{N}(14) \to \text{M}(13)$. Output: $\mathbf{KVM}$. |
| **09** | **MAP** | Dual Reflection Invariant | Applying opposite replacement twice returns each letter to its initial identity ($27-(27-p)=p$). Output: $\mathbf{MAP}$. |
| **10** | **No; Q** | Opposite Verification | $\text{J}=10, \text{R}=18 \implies 10 + 18 = 28 \neq 27$. Correct opposite for $\text{J}$ is $27 - 10 = 17 \to \mathbf{Q}$. |
| **11** | **Even** | Multi-Digit Parity | Unit digit is $8$ (divisible by 2); $408 = 2 \times 204$ with zero remainder $\implies \mathbf{Even}$. |
| **12** | **Even** | Sum Parity | Both integers are odd; $\text{Odd} + \text{Odd} = \text{Even}$ ($35 + 47 = 82$). Output: $\mathbf{Even}$. |
| **13** | **Odd** | Operational Parity | $19 \times 12 = \text{Even}$ ($228$); $\text{Even} - \text{Odd}(3) = \mathbf{Odd}$ ($228 - 3 = 225$). |
| **14** | **26** | Constant Arithmetic Delta | Differences: $11-6 = 5, 16-11 = 5, 21-16 = 5 \implies 21 + 5 = \mathbf{26}$. |
| **15** | **12** | Alternating Delta | Transitions: $+4, -1, +4, -1, +4$. Next transition is $-1 \implies 13 - 1 = \mathbf{12}$. |
| **16** | **2 and 13** | Prime Identification | $2$ and $13$ have exactly two divisors. $1$ has only one divisor; $9$ ($3\times3$) and $15$ ($3\times5$) are composite. |
| **17** | **1, 3, 5, 15; Composite** | Factor Enumeration | Four distinct positive factors ($>2$ factors) $\implies \mathbf{Composite}$. |
| **18** | **Prime (Check 2, 3)** | Square Root Test | $\sqrt{23} \approx 4.79$. Primes $\le 4$ are $2$ and $3$. Neither divides $23$. Next prime $5$ has $5^2 = 25 > 23 \implies \mathbf{Prime}$. |
| **19** | **No** | Even Prime Logic | Any even integer $>2$ has at least three distinct divisors ($1, 2, n$), violating the prime definition. |
| **20** | **Even** | Algebraic Parity | The sum of two odd integers is always even. Since $2$ is excluded by prompt ("odd primes"), the sum is unconditionally $\mathbf{Even}$. |
| **21** | **144** | Perfect Square | $12 \times 12 = \mathbf{144}$. |
| **22** | **216** | Perfect Cube | $6 \times 6 \times 6 = 36 \times 6 = \mathbf{216}$. |
| **23** | **Perfect Cube Only** | Power Categorization | $5^3 = 125$. For squares: $11^2 = 121 < 125 < 144 = 12^2 \implies$ Not a square. Output: $\mathbf{Perfect\ Cube\ Only}$. |
| **24** | **27** | Index Formula | 5th term corresponds to $n=5 \implies 5^2 + 2 = 25 + 2 = \mathbf{27}$. |
| **25** | **No (81 and 100)** | Square Proximity | $9^2 = 81 < 90 < 100 = 10^2$. $90$ lies strictly between consecutive squares $\implies \mathbf{No}$. |
| **26** | **P** | Forward Coordinate Shift | Coordinates: $4, 7, 10, 13 (+3) \implies 13 + 3 = 16 \to \mathbf{P}$. |
| **27** | **G** | Backward Coordinate Shift| Coordinates: $23, 19, 15, 11 (-4) \implies 11 - 4 = 7 \to \mathbf{G}$. |
| **28** | **P** | Expanding Delta Series | Coordinates: $2, 4, 7, 11$. Deltas: $+2, +3, +4 \implies$ Next delta is $+5$: $11 + 5 = 16 \to \mathbf{P}$. |
| **29** | **H** | Interleaved Twin Streams | Odd Stream: $\text{B}_2, \text{D}_4, \text{F}_6 \implies (+2) \to \mathbf{H}_8$. Even Stream: $\text{Y}_{25}, \text{W}_{23}, \text{U}_{21}$. Target is 7th term $\to \mathbf{H}$. |
| **30** | **AC** | Cyclic Modulo 26 Shift | $\text{X}(24) + 3 = 27 \equiv 1 \to \mathbf{A}$; $\text{Z}(26) + 3 = 29 \equiv 3 \to \mathbf{C}$. Output: $\mathbf{AC}$. |

> [!TIP]
> **5-Point Oral Recall Checkpoint:**
> Before proceeding, test your mental recall without looking at the notes:
> 1. Why does the alphabet coordinate conversion formula use $27$ instead of $26$?
> 2. Why is $1$ mathematically excluded from the prime numbers?
> 3. Why does $\text{Odd} + \text{Odd}$ always produce an $\text{Even}$ integer?
> 4. How can $64$ simultaneously be a perfect square AND a perfect cube?
> 5. What is the fundamental difference between reversing a string and replacing it with opposites?

---

## 9. 🔁 Systematic Revision, Mistake Repair & Foundation Scorecard

### 9.1 One-Screen Rapid Recall Sheet

| Foundation Concept | Deterministic Memory Anchor | Mathematical Execution Formula |
|---|---|---|
| **Forward ↔ Reverse Coordinates** | Sum of both coordinates always equals 27 | $\text{Reverse Pos} = 27 - \text{Forward Pos}$ |
| **Custom Row Inversion ($n$ items)** | Sum of left and right ranks equals $n + 1$ | $\text{Right Pos} = (n + 1) - \text{Left Pos}$ |
| **Letters Strictly Between $p$ and $q$**| Non-inclusive interior distance | $\text{Letters Between} = \text{High} - \text{Low} - 1$ |
| **Opposite Letter Mapping** | Complementary sum is 27 | $\text{Opposite}(p) = 27 - p$ |
| **Integer Parity** | Divisibility by 2; Zero is even | $\text{Even} \pm \text{Even} = \text{Even}$; $\text{Odd} \pm \text{Odd} = \text{Even}$ |
| **Prime Definition** | Exactly 2 positive divisors ($>1$) | $1$ is neither; $2$ is the ONLY even prime |
| **Squares & Cubes** | Repeated equal factor products | $n^2 = n \times n$; $n^3 = n \times n \times n$ |
| **Sequential Delta Analysis** | Compute all consecutive differences | Transition difference: $\Delta = T_n - T_{n-1}$ |
| **Modular Alphabet Wraparound** | Cyclic alphabet convention | $\text{Z} + 1 \to \text{A}$ (Modulo 26) |

<!-- separate learning boxes -->

> **தமிழில் நினைவூட்டல்:**
> - முதலில் விதியை உங்கள் சொந்த சொற்களில் கூறிப் பாருங்கள்.
> - உதவியின்றி கணக்கிட்டு விடை காணுங்கள்.
> - தவறு ஏற்பட்டால், தவறான படிநிலையை மட்டும் கண்டறிந்து குறிப்பேட்டில் பதிவு செய்யுங்கள்.

---

### 9.2 Mistake Repair Register

| If you made this error... | The behavioral root cause was... | The permanent deterministic repair is... |
|---|---|---|
| **Counted starting letter as step 1** | Treating origin as distance. | Mark origin as Step 0; start counting moves from the adjacent item. |
| **Used 27 for a custom short row** | Blindly memorizing the number 27. | Count the actual elements $n$ in the row first; apply $(n + 1) - p$. |
| **Confused string reversal with opposites** | Blurring sequence and character identity. | Write string reversal (`DOG → GOD`) and opposite substitution (`DOG → WLT`) side-by-side. |
| **Called an odd number prime** | Conflating oddness with primality. | Test factor divisibility: $9 = 3 \times 3$, $15 = 3 \times 5$, $21 = 3 \times 7$ (all composite). |
| **Confused $n^2$ with $2n$** | Multiplication by 2 vs. self-multiplication. | Write out the repeated factors explicitly ($8^2 = 8 \times 8 = 64 \neq 16$). |
| **Guessed rule from a single gap** | Premature pattern commitment. | Compute deltas across **every single given transition** before selecting an answer. |

---

### 9.3 Spaced Revision Foundation Scorecard

| Evaluation Cycle | Scheduled Target | Score (/30) | Accuracy % | Unforced Slips | Primary Skill Needing Repair | Gate Status |
|:---:|:---:|:---:|:---:|:---:|---|:---:|
| **Baseline Diagnostic** | Day 1 | /30 | % | | Positions / Opposites / Primes / Powers | [ ] Pass ($\ge 70\%$) |
| **Spaced Review 1** | Day 7 | /30 | % | | | [ ] Pass ($\ge 80\%$) |
| **Spaced Review 2** | Day 21 | /30 | % | | | [ ] Pass ($\ge 80\%$) |
| **Final Mastery Gate** | Pre-Exam | /30 | % | | | [ ] Clean Retention |

> [!NOTE]
> **Master Study Plan Benchmark Criteria:**
> In accordance with the [Master Study Plan](../../Plan/FINAL-PLAN-NOV2026-MAY2027.md), foundational competency mandates:
> - **Yellow Baseline Gate:** Minimum **$\ge 70\%$ (21/30)** on fresh un-timed practice.
> - **Green Exam-Ready Gate:** **$\ge 80\%$ on timed sets** ($< 30\text{ seconds}$ per question) and **two consecutive 100% clean unaided re-solves** on Days 7 and 21.

---

### 9.4 🏁 10-Point Chapter Mastery Checklist

Before transitioning to Module `RF2`, verify your mastery against these 10 criteria:

- [ ] **Gate 01:** I can calculate both forward and reverse alphabet coordinates without finger counting.
- [ ] **Gate 02:** I can explain why the forward and reverse sum is 27 for a 26-letter alphabet.
- [ ] **Gate 03:** I can apply the $(n + 1) - \text{Left Pos}$ formula to any arbitrary row of $n$ items.
- [ ] **Gate 04:** I can recall complementary opposite pairs instantly using the $27 - p$ formula.
- [ ] **Gate 05:** I rigorously distinguish between string reversal and opposite-letter replacement.
- [ ] **Gate 06:** I can evaluate arithmetic parity expressions ($+$, $-$, $\times$) without full computation.
- [ ] **Gate 07:** I can identify primes up to 30 and know why 1 is neither prime nor composite.
- [ ] **Gate 08:** I have memorized squares up to 20 and cubes up to 10 in both directions.
- [ ] **Gate 09:** I can solve interleaved dual-stream and expanding-gap letter sequences.
- [ ] **Gate 10:** I scored at least 21/30 ($\ge 70\%$) on the independent practice challenges and logged errors.

---

> [!NOTE]
> **Sequential Curriculum Bridge:**
> You are now fully prepared for **Module RF2: Instructions & Relationships**.
> While `RF1` established coordinate, numeric, and alphabet fluency, `RF2` builds operational execution on directional compass tracking, multi-condition rule following, and genealogical blood relations.
> **Proceed to:** [RF2 — Reasoning Foundations: Instructions & Relationships](00-RF2-Instructions-and-Relationships.md).
