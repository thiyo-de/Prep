# 🔢 R07 — Series: Numbers, Letters and Mixed Patterns
### எண் மற்றும் எழுத்துத் தொடர்கள் | Core Reasoning Masterclass

> 🎯 **Mastery Target:** Master sequence recognition across arithmetic deltas, polynomial powers ($n^2, n^3$), geometric ratios, interleaved multi-streams, recurrence rules ($T_n = f(T_{n-1}, T_{n-2})$), letter coordinate shifts, and wrong-term repair.
> ⏱️ **Target Speed & Accuracy:** $\le 30\text{ sec / question}$ | $\ge 80\%$ First-Attempt Accuracy.
> 📌 **Prerequisites:** [RF1 — Letters and Numbers](00-RF1-Letters-and-Numbers.md) & [RF2 — Instructions and Relationships](00-RF2-Instructions-and-Relationships.md). Related: [R01 — Analogy](01-R01-Analogy.md) & [R04 — Classification](02-R04-Classification.md).

---

### 🗺️ Module Architecture & Roadmap

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                 R07: SEQUENCE RECOGNITION & REASONING ENGINE                │
├───────────────┬───────────────┬───────────────┬───────────────┬─────────────┤
│   PILLAR 1    │   PILLAR 2    │   PILLAR 3    │   PILLAR 4    │  PILLAR 5   │
│ Arithmetic    │ Geometric     │ Polynomial &  │ Interleaved   │ Recurrence  │
│ Differences   │ Ratios & Maps │ Prime Scales  │ Multi-Streams │ & Codes     │
│ (D1–D5)       │ (R1–R5)       │ (K1–K5)       │ (A1–A5)       │ (F1–F5, C5) │
└───────────────┴───────────────┴───────────────┴───────────────┴─────────────┘
```

| Route Stage | Focus Area | Core Objective | Passing Gate |
| :---: | :--- | :--- | :---: |
| **Stage 1** | **Foundations & Differences** | Distinguish index vs. value; calculate 1st ($\Delta$) and 2nd ($\Delta^2$) differences | $\ge 80\%$ |
| **Stage 2** | **Ratios, Powers & Primes** | Detect geometric growth ($\times r$), affine rules ($an \pm b$), squares ($n^2$), and primes | $\ge 80\%$ |
| **Stage 3** | **Interleaved & Hybrid Codes** | Deconstruct alternating dual streams, recurrence windows, and letter coordinates | $\ge 80\%$ |
| **Stage 4** | **Diagnostic Drills & Repairs** | Complete 40 mixed practice challenges, diagnose error root causes, and log reviews | 32/40 ($\ge 80\%$) |

> ℹ️ **Pedagogical Note:** All 45 worked models and 40 independent practice questions are structured teaching exercises designed to train systematic falsification and prevent superficial guessing. Finite sequences deliberately highlight when evidence is sufficient vs. ambiguous.

---

### 🌳 Sequence Rate-of-Growth Decision Tree

```text
                   INSPECT THE RATE OF GROWTH / PATTERN
                                     │
    ┌────────────────┬───────────────┼───────────────┬────────────────┐
    ▼                ▼               ▼               ▼                ▼
Slow Steady      Accelerating     Rapid Steep     Oscillating      Previous Terms
Growth           Gaps             Jump            Up & Down        Sum
    │                │               │               │                │
    ▼                ▼               ▼               ▼                ▼
Arithmetic       Quadratic        Geometric       Interleaved      Recurrence
First Difference Second Diff      Ratio (×r)      Dual Streams     (Fibonacci /
Δ = constant     Δ² = constant    or n!, a·n+b    Odd/Even Pos     Lucas window)
```

---

## 1. 🧠 What is a Series Question?

### 1.1 An Ordered List Following a Mathematical Rule

In logical reasoning, a **series / sequence (தொடர் / வரிசை)** is a strictly ordered succession of terms where each element occupies a distinct positional index:

```text
Position Index (n):   1      2      3      4      5      6
Term Value (T_n):     4      9     14     19     24      ?
First Delta (Δ):        +5     +5     +5     +5     +5

Next Value = 24 + 5 = 29
```

> [!IMPORTANT]
> **Index ($n$) vs. Value ($T_n$):**
> Never confuse the **position index** of an element with its **actual numeric value**. The 5th term ($n=5$) of a series can be $24$, $100$, or any value governed by the transformation rule.

| Mathematical Term | Tamil Support | Operational Definition |
| :--- | :--- | :--- |
| **Sequence / Series** | வரிசை / தொடர் | An ordered progression of terms obeying a repeatable rule. |
| **Term ($T_n$)** | உறுப்பு | An individual element occupying position $n$. |
| **Position / Index ($n$)** | இடம் / இட எண் | The 1-based sequential address ($1, 2, 3 \dots$). |
| **Difference / Gap ($\Delta$)**| வித்தியாசம் / இடைவெளி | Forward change between adjacent terms: $\Delta_n = T_{n+1} - T_n$. |
| **Ratio ($r$)** | விகிதம் | Multiplicative factor between terms: $r = T_{n+1} / T_n$ ($T_n \ne 0$). |
| **Constant** | மாறாத மதிப்பு | A delta, multiplier, or offset that remains invariant throughout. |
| **Alternating** | மாறிமாறி வரும் | Successive steps alternating between two operations (e.g., $+3, \times 2, +3$). |
| **Interleaved** | ஒன்றுக்குள் ஒன்று கலந்த | Two independent sub-sequences occupying odd and even positions. |
| **Recurrence** | முந்தைய உறுப்புகளின் விதி | A rule where $T_n$ depends on multiple preceding terms (e.g., $T_{n-1} + T_{n-2}$). |
| **Verification** | சரிபார்த்தல் | Testing a hypothesized rule against all remaining supplied terms. |

<!-- separate learning boxes -->

> **தமிழில்:** “ஐந்தாவது உறுப்பு” என்பது ஐந்தாவது இடத்தில் இருக்கும் மதிப்பு. அந்த மதிப்பு 5 ஆக இருக்க வேண்டிய அவசியமில்லை. இட எண்ணையும் (Position) உறுப்பின் மதிப்பையும் (Value) ஒருபோதும் குழப்ப வேண்டாம்.

---

### 1.2 Essential Calculation Recall Bank

Before attempting sequence deduction, ensure immediate recall of core arithmetic invariants:

| Category | High-Speed Mental Fact Bank | Key Mathematical Invariant |
| :--- | :--- | :--- |
| **Parity Operations** | $\text{Even} \pm \text{Even} = \text{Even}$<br>$\text{Odd} \pm \text{Odd} = \text{Even}$<br>$\text{Odd} \pm \text{Even} = \text{Odd}$ | An even factor makes any integer product even ($2k \times m = 2km$). Zero is an even integer. |
| **Primes up to 30** | $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ | $1$ is neither prime nor composite; $2$ is the unique even prime. |
| **Squares ($1 \le n \le 10$)** | $1, 4, 9, 16, 25, 36, 49, 64, 81, 100$ | $n^2 = n \times n$. Difference between consecutive squares is $2n+1$. |
| **Squares ($11 \le n \le 20$)**| $121, 144, 169, 196, 225, 256, 289, 324, 361, 400$ | Memory bench for intermediate power jumps. |
| **Cubes ($1 \le n \le 10$)** | $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$ | $n^3 = n \times n \times n$. $64$ is dual-property ($8^2$ and $4^3$). |
| **Factorials ($n!$)** | $1!=1, 2!=2, 3!=6, 4!=24, 5!=120, 6!=720$ | Super-steep multiplicative growth. |
| **Alphabet Coordinates** | $\text{A}=1 \dots \text{Z}=26$; Opposite Sum: $p_1 + p_2 = 27$ | Modular wrap: $\text{Z}(26) + 1 = \text{A}(1)$ under cyclic rules. |

> [!CAUTION]
> **Operation Precedence & Brackets:**
> - "Double, then add 1" $= 2n + 1$.
> - "Add 1, then double" $= 2(n + 1) = 2n + 2$.
> Always preserve strict operational order when formulating or inverting a rule!

---

## 2. 🎯 How to Choose a Pattern: Evidence and Parsimony

### 2.1 The 8-Step Universal Solving Protocol

```text
Step 1: Identify Objective    ──► Next term, middle blank, wrong term, or replacement?
Step 2: Read Restrictions     ──► Whole numbers only, digits allowed, cyclic wrap?
Step 3: Analyze Global Trend  ──► Flat/Slow, Quadratic, Geometric, Oscillating?
Step 4: Formulate Hypothesis  ──► Differences (Δ), Ratios (×r), Powers (n²±k), Streams?
Step 5: Test Across Entire List──► Rule must satisfy ALL supplied transitions!
Step 6: Compute Target Term   ──► Apply operation at correct phase/position.
Step 7: Two-Sided Sandwich Check► For middle blanks, verify left side AND right side!
Step 8: Resolve Ambiguities   ──► Prefer direct, economical rules over contrived fits.
```

---

### 2.2 Five Worked Analytical Models: Evidence and Competing Rules (P1–P5)

| Model ID | Given Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **P1**<br>`Under-determined` | **Given only: 2, 4, ?**<br>Must next term be 6 or 8? | 1. Hypothesis A (Arithmetic): $+2 \implies 2, 4, 6$.<br>2. Hypothesis B (Geometric): $\times 2 \implies 2, 4, 8$.<br>3. With only one observed transition ($2 \to 4$), both rules are equally valid. | **Selection:** **Insufficient evidence to distinguish 6 from 8.**<br><br>✓ **Trap Check:** A single transition can NEVER uniquely establish a sequence rule! |
| **P2**<br>`Falsification` | **For 2, 4, 8, 16, ?**<br>Compare $+2$ with $\times 2$. | 1. Test $+2$: $2+2=4$, but $4+2=6 \ne 8$. Fails at transition 2.<br>2. Test $\times 2$: $2 \times 2 = 4$, $4 \times 2 = 8$, $8 \times 2 = 16$. Holds across all 3 steps.<br>3. Compute next: $16 \times 2 = 32$. | **Selection:** **32 (under supported doubling rule).**<br><br>✓ **Trap Check:** Rejected rule fails actual empirical evidence, not personal preference. |
| **P3**<br>`Gap vs. Term` | **For 3, 6, 11, 18, ?**<br>Gaps increase by 2 each step. | 1. Compute first differences: $6-3=3$, $11-6=5$, $18-11=7$.<br>2. Gaps form arithmetic sequence: $3, 5, 7 \implies$ Next gap is $9$.<br>3. Add next gap to last term: $18 + 9 = 27$. | **Selection:** **27**<br><br>✓ **Trap Check:** $9$ is the next **gap ($\Delta$)**, NOT the next sequence term! |
| **P4**<br>`Interleaved Streams` | **For 2, 20, 4, 18, 6, 16, ?**<br>Compare separate odd/even streams. | 1. Deconstruct positions:<br>   - Odd positions ($1, 3, 5$): $2, 4, 6$ (Rule: $+2$)<br>   - Even positions ($2, 4, 6$): $20, 18, 16$ (Rule: $-2$)<br>2. Target is 7th term (odd position) $\implies 6 + 2 = 8$. | **Selection:** **8**<br><br>✓ **Trap Check:** Do not apply $-2$ (giving 14); identify the exact stream phase! |
| **P5**<br>`Hybrid Field Check`| **A1, C4, E9, G16, ?**<br>Letter $+2$, numeric suffix. | 1. Letter field: $\text{A}(1), \text{C}(3), \text{E}(5), \text{G}(7) \implies \text{Next is I}(9)$.<br>2. Numerical field: $1^2, 2^2, 3^2, 4^2 \implies$ Next is $5^2 = 25$.<br>3. Combined token: $\text{I}25$. | **Selection:** **I25 (not I18).**<br><br>✓ **Trap Check:** Both fields must independently validate. A correct letter cannot rescue a wrong suffix! |

---

## 3. ➕ Differences: Constant, Growing and Changing Gaps

### 3.1 First Differences ($\Delta$) and Second Differences ($\Delta^2$)

When sequence values grow at a steady or modest rate, compute the table of successive differences:

$$\Delta_n = T_{n+1} - T_n$$

$$\Delta^2_n = \Delta_{n+1} - \Delta_n$$

```text
Sequence Terms (T_n):          2       5      10      17      26      [37]
First Differences (Δ):             3       5       7       9      [11]
Second Differences (Δ²):               2       2       2       [2]
```

- If **$\Delta$ is constant**, the sequence is **Linear (Arithmetic Progression)**: $T_n = an + b$.
- If **$\Delta^2$ is constant**, the sequence is **Quadratic**: $T_n = an^2 + bn + c$.
- Always record negative signs if terms decrease (e.g., $-7, -7$).

<!-- separate learning boxes -->

> **தமிழில்:** அடுத்த எண்ணிலிருந்து முந்தைய எண்ணைக் கழிக்கவும் ($\Delta$). அந்த இடைவெளிகள் மாறாமல் இருந்தால் அது நேரடி வரிசை; இடைவெளிகளே சீராக மாறினால் அது இரண்டாம் நிலை இடைவெளி ($\Delta^2$). அடுத்த இடைவெளியைக் கண்டுபிடித்து கடைசி உறுப்புடன் கூட்ட வேண்டும்.

---

### 3.2 Five Worked Analytical Models (D1–D5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **D1**<br>`Constant Positive Δ`| **4, 9, 14, 19, ?**<br>Constant difference | 1. Compute gaps: $9-4=5$, $14-9=5$, $19-14=5$ (constant $\Delta = +5$).<br>2. Apply $+5$ to last term: $19 + 5 = 24$. | **Selection:** **24**<br><br>✓ **Check:** 4 equal steps lead from term 1 to term 5. |
| **D2**<br>`Constant Negative Δ`| **50, 43, 36, 29, ?**<br>Constant difference | 1. Compute gaps: $43-50 = -7$, $36-43 = -7$, $29-36 = -7$ (constant $\Delta = -7$).<br>2. Apply $-7$ to last term: $29 - 7 = 22$. | **Selection:** **22**<br><br>✓ **Trap Check:** Do not discard negative sign ($29+7=36$ reverses direction)! |
| **D3**<br>`Growing Gap (+2)` | **3, 7, 13, 21, ?**<br>Gaps increase by 2 | 1. Compute gaps: $7-3=4$, $13-7=6$, $21-13=8$.<br>2. Gap sequence: $4, 6, 8 \implies$ Next gap is $10$.<br>3. Compute next term: $21 + 10 = 31$. | **Selection:** **31**<br><br>✓ **Trap Check:** Do not repeat $+8$ when gaps are actively expanding. |
| **D4**<br>`Second Difference`| **2, 5, 10, 17, 26, ?**<br>Constant second difference | 1. First differences: $3, 5, 7, 9$.<br>2. Second differences: $5-3=2, 7-5=2, 9-7=2$ (constant $\Delta^2 = 2$).<br>3. Next first difference is $9 + 2 = 11$. Target: $26 + 11 = 37$. | **Selection:** **37**<br><br>✓ **Dual Check:** Also equals $n^2 + 1$ ($1^2+1=2 \dots 6^2+1=37$). Both methods agree! |
| **D5**<br>`Doubling Gaps` | **1, 3, 7, 15, 31, ?**<br>Successive gaps double | 1. Compute gaps: $3-1=2$, $7-3=4$, $15-7=8$, $31-15=16$.<br>2. Next gap doubles: $16 \times 2 = 32$.<br>3. Compute next term: $31 + 32 = 63$. | **Selection:** **63**<br><br>✓ **Dual Check:** Also satisfies $T_n = 2T_{n-1} + 1$ ($2 \times 31 + 1 = 63$). |

## 4. ✖️ Ratios, Division and Affine Transformations ($aT_n \pm b$)

### 4.1 Operational Mechanics & Inversion Rules

When consecutive terms grow or shrink rapidly, test for geometric multiplication ($\times r$), constant division ($\div d$), or affine mappings where an arithmetic adjustment follows multiplication ($T_n = a \cdot T_{n-1} \pm b$).

| Transformation Type | Algebraic Pattern | Characteristic Example | Invariant Property to Verify |
| :--- | :--- | :--- | :--- |
| **Constant Multiplier** | $T_n = r \cdot T_{n-1}$ | $6 \to 18 \to 54$ | Multiplier $r = 3$ remains strictly invariant. |
| **Constant Divisor** | $T_n = T_{n-1} / d$ | $81 \to 27 \to 9$ | Divisor $d = 3$ (or ratio $1/3$) holds across all steps. |
| **Multiply & Add** | $T_n = a \cdot T_{n-1} + b$ | $5 \to 11 \to 23$ ($2T + 1$) | Both multiplier ($a=2$) and addition ($b=1$) must hold. |
| **Multiply & Subtract** | $T_n = a \cdot T_{n-1} - b$ | $9 \to 17 \to 33$ ($2T - 1$) | Both multiplier ($a=2$) and subtraction ($b=1$) in fixed order. |
| **Dynamic Multipliers** | $T_n = n \cdot T_{n-1}$ | $1 \to 2 \to 6 \to 24$ | Multipliers increase consecutively ($\times 2, \times 3, \times 4 \dots$). |

> [!WARNING]
> **Strict Operational Inversion Rule:** For affine transitions like $T_n = 2T_{n-1} + 1$, reversing a step requires reversing the order of operations: $T_{n-1} = (T_n - 1) / 2$. You must subtract 1 **first**, then divide by 2. Dividing first ($T_n/2 - 1$) produces an incorrect value.

<!-- separate learning boxes -->

> **தமிழில்:** ஒரு தொடர் குறையும்போது அது வெறும் கழித்தல் என்று அவசரப்பட்டு முடிவு செய்யாதீர்கள்; வகுத்தல் ($\div$) அல்லது பெருக்கலுடன் கூடிய கூட்டல்/கழித்தலாகவும் ($aT \pm b$) இருக்கலாம். $T_n = 2T_{n-1} + 1$ என்ற விதியை பின்னோக்கி இயக்கும்போது, முதலில் $1$-ஐ கழித்து பிறகே $2$-ஆல் வகுக்க வேண்டும்; செயல்பாட்டு வரிசையை மாற்றக்கூடாது.

---

### 4.2 Five Worked Analytical Models (R1–R5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **R1**<br>`Constant Ratio (×3)` | **2, 6, 18, 54, ?**<br>Constant multiplication ratio | 1. Compute ratios: $6 / 2 = 3$, $18 / 6 = 3$, $54 / 18 = 3$ (constant $r = 3$).<br>2. Apply ratio to last term: $54 \times 3 = 162$. | **Selection:** **162**<br><br>✓ **Gap Inspection:** Additive differences are $4, 12, 36$ (each also triples); not constant AP gaps. |
| **R2**<br>`Constant Ratio (÷3)` | **243, 81, 27, 9, ?**<br>Constant division ratio | 1. Compute ratios: $81 / 243 = 1/3$, $27 / 81 = 1/3$, $9 / 27 = 1/3$ (repeated $\div 3$).<br>2. Apply divisor to last term: $9 / 3 = 3$. | **Selection:** **3**<br><br>✓ **Trap Check:** Do not misread as subtraction ($-162, -54, -18$ shrink by factor of 3). |
| **R3**<br>`Affine Map (2T + 1)` | **2, 5, 11, 23, ?**<br>Double then add 1 | 1. Test affine step: $2 \times 2 + 1 = 5$, $5 \times 2 + 1 = 11$, $11 \times 2 + 1 = 23$.<br>2. Invariant rule is $T_n = 2T_{n-1} + 1$.<br>3. Compute next term: $23 \times 2 + 1 = 47$. | **Selection:** **47**<br><br>✓ **Trap Check:** $46$ forgets $+1$; $(23+1)\times 2 = 48$ alters operation precedence. |
| **R4**<br>`Affine Map (2T - 1)` | **3, 5, 9, 17, ?**<br>Double then subtract 1 | 1. Test affine step: $3 \times 2 - 1 = 5$, $5 \times 2 - 1 = 9$, $9 \times 2 - 1 = 17$.<br>2. Invariant rule is $T_n = 2T_{n-1} - 1$.<br>3. Compute next term: $17 \times 2 - 1 = 33$. | **Selection:** **33**<br><br>✓ **Dual Check:** Differences are $2, 4, 8, 16 \implies 17 + 16 = 33$. Both models match! |
| **R5**<br>`Factorial Multipliers` | **1, 2, 6, 24, 120, ?**<br>Consecutive multipliers | 1. Compute successive ratios: $2/1 = 2$, $6/2 = 3$, $24/6 = 4$, $120/24 = 5$.<br>2. Next multiplier is consecutive integer $6$.<br>3. Compute next term: $120 \times 6 = 720$. | **Selection:** **720**<br><br>✓ **Check:** Matches factorial series $n!$ ($1!, 2!, 3!, 4!, 5!, 6!$). Do not freeze at $\times 5$. |

---

## 5. 🟦 Squares, Cubes, Primes and Benchmark Numerical Families

### 5.1 Recognition vs. Verification Protocol

A candidate sequence may present squares, cubes, primes, or modified power offsets ($n^k \pm c$). The fundamental diagnostic task is determining whether the benchmark numbers are **the terms themselves** or **the difference gaps between successive terms**.

| Family Pattern | Algebraic Form | Benchmark Sequence | Recognition & Position Check |
| :--- | :--- | :--- | :--- |
| **Perfect Squares** | $T_n = n^2$ | $9, 16, 25, 36 \dots$ | Bases are $3^2, 4^2, 5^2 \dots$ (Check base start point: begins at $n=3$, not $1$). |
| **Perfect Cubes** | $T_n = n^3$ | $8, 27, 64, 125 \dots$ | Bases are $2^3, 3^3, 4^3, 5^3 \dots$ |
| **Shifted Squares** | $T_n = n^2 - 1$ | $3, 8, 15, 24 \dots$ | Add 1 mentally to reveal benchmark squares: $4, 9, 16, 25 \dots$ |
| **Shifted Cubes** | $T_n = n^3 \pm c$ | $7, 26, 63, 124 \dots$ | Recognise proximity to $8, 27, 64, 125$ ($n^3 - 1$). |
| **Direct Primes** | $T_n = P_n$ | $5, 7, 11, 13, 17 \dots$ | Consecutive primes. (Note: $9$ and $15$ are absent; not odd numbers). |
| **Prime Gaps** | $\Delta_n = P_n$ | $1, 3, 6, 11, 18 \dots$ | First differences are primes: $+2, +3, +5, +7 \dots$ (terms themselves are not prime). |

<!-- separate learning boxes -->

> **தமிழில்:** கொடுக்கப்பட்டுள்ள வரிசையில் உள்ள எண்களே வர்க்கம்/கனமா ($n^2, n^3$), அல்லது அவற்றுக்கு இடையிலான வித்தியாசங்கள்தான் ($+2, +3, +5 \dots$) அந்த வகையா என்று கூர்ந்து கவனியுங்கள். தொடக்க எண் $1^2$-இல் தொடங்காமல் $3^2$-இல் தொடங்கலாம்; எனவே அடி எண்களின் (base) நிலையை சரியாகக் குறித்துக்கொள்ளுங்கள்.

---

### 5.2 Five Worked Analytical Models (K1–K5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **K1**<br>`Consecutive Squares` | **4, 9, 16, 25, 36, ?**<br>Consecutive square progression | 1. Identify base integers: $2^2, 3^2, 4^2, 5^2, 6^2$.<br>2. Next base integer is $7$.<br>3. Compute next term: $7^2 = 49$. | **Selection:** **49**<br><br>✓ **Dual Check:** Differences are $5, 7, 9, 11 \implies 36 + 13 = 49$. |
| **K2**<br>`Consecutive Cubes` | **8, 27, 64, 125, ?**<br>Consecutive cube progression | 1. Identify base integers: $2^3=8, 3^3=27, 4^3=64, 5^3=125$.<br>2. Next base integer is $6$.<br>3. Compute next term: $6^3 = 6 \times 6 \times 6 = 216$. | **Selection:** **216**<br><br>✓ **Trap Check:** $36$ is $6^2$, an exponent-confusion blunder. |
| **K3**<br>`Shifted Squares (n² - 1)` | **0, 3, 8, 15, 24, ?**<br>One less than consecutive square | 1. Add $+1$ offset to each term: $1, 4, 9, 16, 25$ ($1^2, 2^2, 3^2, 4^2, 5^2$).<br>2. Next square is $6^2 = 36$.<br>3. Subtract offset: $36 - 1 = 35$. | **Selection:** **35**<br><br>✓ **Trap Check:** Model is $n^2 - 1$ starting at $n=1$, not $(n-1)^2$. |
| **K4**<br>`Consecutive Primes` | **2, 3, 5, 7, 11, 13, ?**<br>Consecutive prime progression | 1. List sequence: increasing prime numbers.<br>2. After $13$, inspect integers: $14$ (comp), $15$ (comp), $16$ (comp), $17$ (prime).<br>3. Target term is $17$. | **Selection:** **17**<br><br>✓ **Trap Check:** $15$ is the next odd integer ($3 \times 5$), but is NOT prime. |
| **K5**<br>`Prime Differences` | **1, 3, 6, 11, 18, ?**<br>Differences are consecutive primes | 1. Compute gaps: $3-1=2$, $6-3=3$, $11-6=5$, $18-11=7$.<br>2. Gap sequence is prime numbers: $2, 3, 5, 7 \implies$ next gap is $11$.<br>3. Compute next term: $18 + 11 = 29$. | **Selection:** **29**<br><br>✓ **Trap Check:** $11$ is the gap, not the term. $18+9=27$ assumes odd-number gaps. |

---

## 6. 🔀 Alternating Operations, Interleaved Streams and Grouped Blocks

### 6.1 Architectural Classification of Compound Series

When a series exhibits oscillations (rises and falls) or non-uniform transitions, map it to one of three structural categories:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      COMPOUND SERIES CLASSIFICATION                         │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
│   ALTERNATING    │          │   INTERLEAVED    │          │  GROUPED BLOCKS  │
│    OPERATIONS    │          │  DUAL STREAMS    │          │ (INTERNAL LOGIC) │
├──────────────────┤          ├──────────────────┤          ├──────────────────┤
│ Single stream    │          │ Two independent  │          │ Clustered chunks │
│ cycling rules:   │          │ interleaved sub- │          │ e.g. [n, 2n, 3n] │
│ +3, ×2, +3, ×2   │          │ series: Odd/Even │          │ with step shift  │
└──────────────────┘          └──────────────────┘          └──────────────────┘
```

#### Dual-Stream Positional Mapping
```text
Position Index:   [1]     [2]     [3]     [4]     [5]     [6]     [7]
Term Value:        2      20       4      18       6      16       ?
                   │               │               │               │
                   └───────+2──────┴───────+2──────┴───────+2──────┘ ──► Term 7 = 8
                           │               │               │
                           └───────-2──────┴───────-2──────┘
```

> [!IMPORTANT]
> **Phase Verification Rule:** Always determine your current phase within the operation cycle before calculating the final answer. Identifying the pattern is insufficient if you apply the rule at the incorrect phase.

<!-- separate learning boxes -->

> **தமிழில்:** தொடரில் எண்கள் ஏறி இறங்கினால், இரண்டு விதிகள் மாறி மாறி வருகிறதா (+3, ×2...), அல்லது ஒற்றைப்படை மற்றும் இரட்டைப்படை இடங்களில் இரண்டு தனித்தனி தொடர்கள் (Interleaved streams) பின்னப்பட்டுள்ளதா என்று அட்டவணை போட்டு பிரித்துப் பார்க்க வேண்டும். சுழற்சியில் அடுத்ததாக வரும் படிநிலையை (phase) கவனமாகப் பொருத்தவும்.

---

### 6.2 Five Worked Analytical Models (A1–A5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **A1**<br>`Alternating (+3, ×2)` | **2, 5, 10, 13, 26, 29, ?**<br>Cyclic operation rule | 1. Map step operations: $2 \xrightarrow{+3} 5 \xrightarrow{\times 2} 10 \xrightarrow{+3} 13 \xrightarrow{\times 2} 26 \xrightarrow{+3} 29$.<br>2. Cycle: $[+3, \times 2]$ repeating. Current phase requires $\times 2$.<br>3. Compute next term: $29 \times 2 = 58$. | **Selection:** **58**<br><br>✓ **Phase Trap Check:** $32$ repeats $+3$ out of turn. Always verify operation phase. |
| **A2**<br>`Interleaved Dual AP` | **2, 20, 4, 18, 6, 16, ?**<br>Interleaved odd/even streams | 1. Odd positions ($1, 3, 5, 7$): $2 \xrightarrow{+2} 4 \xrightarrow{+2} 6 \xrightarrow{+2} ?$.<br>2. Even positions ($2, 4, 6$): $20 \xrightarrow{-2} 18 \xrightarrow{-2} 16$.<br>3. Target is position $7$ (odd stream): $6 + 2 = 8$. | **Selection:** **8**<br><br>✓ **Trap Check:** $14$ extends the even stream ($16-2$), violating positional indexing. |
| **A3**<br>`Interleaved Square/AP` | **1, 10, 4, 20, 9, 30, 16, ?**<br>Find the 8th term | 1. Odd positions ($1, 3, 5, 7$): $1^2=1, 2^2=4, 3^2=9, 4^2=16$.<br>2. Even positions ($2, 4, 6, 8$): $10 \xrightarrow{+10} 20 \xrightarrow{+10} 30 \xrightarrow{+10} ?$.<br>3. Target is term 8 (even stream): $30 + 10 = 40$. | **Selection:** **40**<br><br>✓ **Position Trap Check:** $25$ ($5^2$) is the 9th term, not the requested 8th term. |
| **A4**<br>`3-Term Group Blocks` | **3, 6, 9 / 4, 8, 12 / 5, 10, ?**<br>Block internal multiplier | 1. Analyze block structure: Block 1 is $[3, 6, 9] = [n, 2n, 3n]$ with $n=3$.<br>2. Block 2 is $[4, 8, 12] = [n, 2n, 3n]$ with $n=4$.<br>3. Block 3 has base $n=5 \implies [5, 10, ?] \implies 3 \times 5 = 15$. | **Selection:** **15**<br><br>✓ **Trap Check:** Do not try to fit a single continuous AP across block boundaries. |
| **A5**<br>`3-Phase Cycle` | **10, 12, 24, 21, 23, 46, 43, ?**<br>Repeated $[+2, \times 2, -3]$ | 1. Cycle 1: $10 \xrightarrow{+2} 12 \xrightarrow{\times 2} 24 \xrightarrow{-3} 21$.<br>2. Cycle 2: $21 \xrightarrow{+2} 23 \xrightarrow{\times 2} 46 \xrightarrow{-3} 43$.<br>3. Next cycle resets to Phase 1 ($+2$): $43 + 2 = 45$. | **Selection:** **45**<br><br>✓ **Trap Check:** $86$ applies $\times 2$ prematurely, skipping the mandatory $+2$ phase. |

---

## 7. 🔗 Recurrence Rules & Memory Sequences (Fibonacci & Tribonacci)

### 7.1 Multi-Input Lookback Architecture

In recurrence series, each subsequent term is generated by synthesizing two or more preceding terms. The initial numbers that initiate the process are known as **seeds** (தொடக்க மதிப்புகள்).

```text
Seeds:   [1]     [1]     [2]     [3]     [5]     [8]    ──► [ ? = 13 ]
          │       │       │       │       │       │            │
          └───+───┘       │       │       │       │            │
              └──► 2      │       │       │       │            │
                   └───+──┘       │       │       │            │
                       └──► 3     │       │       │            │
                            └───+─┘       │       │            │
                                └──► 5    │       │            │
                                     └──+─┘       │            │
                                        └──► 8    │            │
                                             └──+─┘            │
                                                └──────────────┘
```

> [!NOTE]
> **Recurrence Testing Rule:** Never attempt to apply a recurrence rule to the initial seeds. A two-term recurrence rule ($T_n = T_{n-1} + T_{n-2}$) can only be evaluated starting from the 3rd term. A three-term recurrence (Tribonacci) can only be evaluated starting from the 4th term.

<!-- separate learning boxes -->

> **தமிழில்:** முந்தைய இரண்டு அல்லது மூன்று எண்களைக் கூட்டி அல்லது பெருக்கி அடுத்த எண் உருவாக்கப்படும் விதிகளில் (Fibonacci/Tribonacci), ஆரம்ப எண்கள் விதிகளை உருவாக்காது; அவை தொடக்க விதைகளே (seeds). எந்த உறுப்புக்கு எவ்வளவு பெருக்கல் காரணி ஒதுக்கப்பட்டுள்ளது ($2T_{n-1} + T_{n-2}$) என்பதை வரிசை மாறாமல் கவனமாகப் பிரதியிட வேண்டும்.

---

### 7.2 Five Worked Analytical Models (F1–F5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **F1**<br>`Standard Fibonacci` | **1, 1, 2, 3, 5, 8, ?**<br>Preceding two-term sum | 1. Test recurrence: $1+1=2, 1+2=3, 2+3=5, 3+5=8$.<br>2. Rule: $T_n = T_{n-1} + T_{n-2}$.<br>3. Add last two terms: $5 + 8 = 13$. | **Selection:** **13**<br><br>✓ **Check:** Do not add all preceding numbers ($1+1+2+3+5+8=20$); only the latest two. |
| **F2**<br>`Shifted Seed Lucas` | **2, 3, 5, 8, 13, ?**<br>Custom seed 2-term sum | 1. Test recurrence with seeds $(2, 3)$: $2+3=5, 3+5=8, 5+8=13$.<br>2. Synthesize next term: $8 + 13 = 21$. | **Selection:** **21**<br><br>✓ **Core Concept:** Recurrence rules operate independently of the initial seed values. |
| **F3**<br>`Tribonacci (3-Term Sum)`| **1, 2, 3, 6, 11, 20, ?**<br>Preceding three-term sum | 1. Test 3-term sum: $1+2+3=6$, $2+3+6=11$, $3+6+11=20$.<br>2. Active sliding window: $(6, 11, 20)$.<br>3. Compute next term: $6 + 11 + 20 = 37$. | **Selection:** **37**<br><br>✓ **Trap Check:** $11+20=31$ uses only two terms, omitting the required third predecessor. |
| **F4**<br>`Weighted Recurrence` | **1, 2, 5, 12, 29, ?**<br>$T_n = 2T_{n-1} + T_{n-2}$ | 1. Test weighted rule: $2(2)+1=5$, $2(5)+2=12$, $2(12)+5=29$.<br>2. Formula: $T_n = 2 \times \text{latest} + \text{preceding}$.<br>3. Compute next term: $2(29) + 12 = 58 + 12 = 70$. | **Selection:** **70**<br><br>✓ **Precedence Trap Check:** $29 + 2(12) = 53$ doubles the wrong predecessor! |
| **F5**<br>`Sandwich Check Blank` | **1, 3, 4, 7, ?, 18, 29**<br>Fill blank with verification | 1. Forward calculation: $4 + 7 = 11$.<br>2. Downstream confirmation: $7 + 11 = 18$ (holds) and $11 + 18 = 29$ (holds).<br>3. Result is fully verified. | **Selection:** **11**<br><br>✓ **Sandwich Protocol:** Always verify that candidate generates both downstream terms. |

---

## 8. 🔤 Alphabetic Coordinate Series & Dual-Track Trajectories

### 8.1 Forward/Reverse Alphabetic Coordinate Reference Matrix

When analyzing letter sequences, immediately map letters to numerical coordinates ($1 \le x \le 26$). This instantly converts abstract letter patterns into transparent arithmetic difference problems.

```text
Forward (1-13):   A:01  B:02  C:03  D:04  E:05  F:06  G:07  H:08  I:09  J:10  K:11  L:12  M:13
Reverse (26-14):  Z:26  Y:25  X:24  W:23  V:22  U:21  T:20  S:19  R:18  Q:17  P:16  O:15  N:14
Opposite Sum:     ─── Sum of any Opposite Pair = 27 (e.g., A+Z = 1+26=27; M+N = 13+14=27) ───
Forward (14-26):  N:14  O:15  P:16  Q:17  R:18  S:19  T:20  U:21  V:22  W:23  X:24  Y:25  Z:26
Reverse (13-01):  M:13  L:12  K:11  J:10  I:09  H:08  G:07  F:06  E:05  D:04  C:03  B:02  A:01
```

> [!TIP]
> **Field Separation Principle:** For multi-letter terms (such as `AZ, CX, EV`), never mix letters between positions. Treat Column 1 ($A, C, E \dots$) and Column 2 ($Z, X, V \dots$) as completely autonomous mathematical streams.

<!-- separate learning boxes -->

> **தமிழில்:** ஆங்கில எழுத்துத் தொடர்களை உடனடியாக அவற்றின் எண் மதிப்புகளாக (A=1, B=2 ... Z=26) மாற்றிவிட்டால், அவை எளிய எண் தொடர்களாக மாறிவிடும். இரண்டு அல்லது மூன்று எழுத்துக் கொத்துகள் (AZ, CX, EV...) வரும்போது, முதல் எழுத்துக்களைத் தனியாகவும், இரண்டாம் எழுத்துக்களைத் தனியாகவும் தனித்தனி தொடர்களாகப் பிரித்து தீர்க்க வேண்டும். எதிர் எழுத்துக்களின் கூட்டுத்தொகை எப்போதும் $27$ ஆகும்.

---

### 8.2 Five Worked Analytical Models (L1–L5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **L1**<br>`Fixed Forward Shift` | **C, F, I, L, ?**<br>Constant coordinate jump | 1. Convert to numbers: $C=3, F=6, I=9, L=12$.<br>2. Common difference: $\Delta = +3$.<br>3. Target coordinate: $12 + 3 = 15 \implies \mathbf{O}$. | **Selection:** **O**<br><br>✓ **Trap Check:** $N=14$ represents an erroneous $+2$ shift. |
| **L2**<br>`Fixed Backward Shift`| **Z, W, T, Q, ?**<br>Constant backward jump | 1. Convert to numbers: $Z=26, W=23, T=20, Q=17$.<br>2. Common difference: $\Delta = -3$.<br>3. Target coordinate: $17 - 3 = 14 \implies \mathbf{N}$. | **Selection:** **N**<br><br>✓ **Trap Check:** Preserve negative sign; do not jump forward to $T=20$. |
| **L3**<br>`Expanding Letter Gap` | **A, C, F, J, O, ?**<br>Growing forward difference | 1. Convert: $A=1, C=3, F=6, J=10, O=15$.<br>2. Compute gaps: $+2, +3, +4, +5$.<br>3. Next gap is $+6$: $15 + 6 = 21 \implies \mathbf{U}$. | **Selection:** **U**<br><br>✓ **Trap Check:** The next gap is $6$, but the next coordinate is $21$, not $6$ ($F$). |
| **L4**<br>`Dual Stream Opposites` | **AZ, CX, EV, GT, ?**<br>Two-field opposite series | 1. Stream 1 (1st letter): $A(1) \xrightarrow{+2} C(3) \xrightarrow{+2} E(5) \xrightarrow{+2} G(7) \xrightarrow{+2} I(9)$.<br>2. Stream 2 (2nd letter): $Z(26) \xrightarrow{-2} X(24) \xrightarrow{-2} V(22) \xrightarrow{-2} T(20) \xrightarrow{-2} R(18)$.<br>3. Combine fields: $I$ and $R \implies \mathbf{IR}$. | **Selection:** **IR**<br><br>✓ **Opposite Verification:** $I(9) + R(18) = 27$. Perfectly matches opposite pair law! |
| **L5**<br>`Cyclic Alphabet Wrap` | **W, Z, C, F, ?**<br>Modular alphabet arithmetic | 1. Convert: $W=23 \xrightarrow{+3} Z=26$.<br>2. Cyclic wrap: $26 + 3 = 29 \equiv 29 - 26 = 3 \implies C$.<br>3. Advance: $C(3) \xrightarrow{+3} F(6) \xrightarrow{+3} 9 \implies \mathbf{I}$. | **Selection:** **I**<br><br>✓ **Modulo Arithmetic:** Modulo 26 wrapping is explicitly verified. |

## 9. 🔠 Alphanumeric Series & Multi-Field Logic

### 9.1 Multi-Field Deconstruction Protocol

An **alphanumeric series** (எழுத்தும் எண்ணும் சேர்ந்த தொடர்) contains both alphabetical and numerical components. The cardinal rule is to **separate the fields first**. Then evaluate whether the numerical field follows an independent sequence or is derived algebraically from the alphabetical coordinate.

| Field Interaction Mode | Mathematical Relationship | Representative Example | Invariant Property to Verify |
| :--- | :--- | :--- | :--- |
| **Independent Parallel Streams** | Letter $+a$; Number $+b$ | $A1, C2, E3, G4 \dots$ | Letter advances by $+2$; number increases by $+1$ independently. |
| **Letter Coordinate Function** | $\text{Suffix} = f(\text{coord})$ | $B4, D16, F36 \dots$ | Suffix equals coordinate squared: $B(2) \to 4, D(4) \to 16, F(6) \to 36$. |
| **Series Positional Function** | $\text{Suffix} = f(\text{index } n)$ | $A1, C4, E9, G16 \dots$ | Suffix is $n^2$ ($1^2, 2^2, 3^2, 4^2$); independent of letter's alphabet index. |
| **Reverse Coordinate Function**| $\text{Suffix} = 27 - \text{coord}$ | $A26, C24, E22 \dots$ | Letter coord + Suffix always sums to $27$ ($1+26=27, 3+24=27$). |
| **Internal Cluster Sum** | $\text{Suffix} = \sum \text{coords}$ | $AB3, CD7, EF11 \dots$ | Suffix equals sum of positions: $A(1)+B(2)=3, C(3)+D(4)=7$. |

> [!CAUTION]
> **Avoid Single-Term Generalization:** Never lock in a hypothesis based solely on the first term. In $A1$, the number $1$ could represent $n=1$, alphabet position $A=1$, or $1^2$. Always cross-check against terms 2 and 3 before finalizing the continuation.

<!-- separate learning boxes -->

> **தமிழில்:** எழுத்தும் எண்ணும் கலந்து வரும் தொடர்களில் (Alphanumeric), இரண்டு பகுதிகளையும் தனித்தனியாகப் பிரித்து ஆராயுங்கள். எண் பகுதியானது எழுத்தின் இடமதிப்பைக் குறிக்கிறதா (B=2, B4 $\implies 2^2=4$), அல்லது தொடரின் வரிசை எண்ணைக் குறிக்கிறதா ($1^2, 2^2, 3^2$), அல்லது தனித்தனி தொடர்களா என்பதை அடுத்தடுத்த இரண்டு உறுப்புகளுடன் ஒப்பிட்டு உறுதி செய்ய வேண்டும்.

---

### 9.2 Five Worked Analytical Models (C1–C5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **C1**<br>`Independent Shift` | **A1, C2, E3, G4, ?**<br>Dual independent arithmetic shifts | 1. Letter field: $A(1) \xrightarrow{+2} C(3) \xrightarrow{+2} E(5) \xrightarrow{+2} G(7) \implies I(9)$.<br>2. Number field: $1 \xrightarrow{+1} 2 \xrightarrow{+1} 3 \xrightarrow{+1} 4 \implies 5$.<br>3. Synthesize code: $\mathbf{I5}$. | **Selection:** **I5**<br><br>✓ **Trap Check:** $I9$ replaces the independent $+1$ count with the letter's coordinate. |
| **C2**<br>`Coord Squared Suffix` | **B4, D16, F36, H64, ?**<br>Suffix is letter position squared | 1. Letter stream: $B(2) \xrightarrow{+2} D(4) \xrightarrow{+2} F(6) \xrightarrow{+2} H(8) \implies J(10)$.<br>2. Suffix rule: $\text{coord}^2 \implies 10^2 = 100$.<br>3. Synthesize code: $\mathbf{J100}$. | **Selection:** **J100**<br><br>✓ **Dual Check:** Suffixes $4, 16, 36, 64, 100$ are $(2n)^2$. Do not simply add 2 to suffix! |
| **C3**<br>`Term Index Squared` | **A1, C4, E9, G16, ?**<br>Suffix is series term index squared | 1. Letter stream: $A(1) \xrightarrow{+2} C(3) \xrightarrow{+2} E(5) \xrightarrow{+2} G(7) \implies I(9)$.<br>2. Suffix stream: Term 1 = $1^2=1$, Term 2 = $2^2=4 \dots$ Term 5 = $5^2=25$.<br>3. Synthesize code: $\mathbf{I25}$. | **Selection:** **I25**<br><br>✓ **Index vs. Coord Trap:** $I81$ squares letter coordinate ($9^2$); correct rule squares term index $n=5$. |
| **C4**<br>`Reverse Position Code` | **A26, C24, E22, G20, ?**<br>Suffix = reverse alphabet position | 1. Letter stream: $A(1) \xrightarrow{+2} C(3) \xrightarrow{+2} E(5) \xrightarrow{+2} G(7) \implies I(9)$.<br>2. Suffix rule: $27 - \text{coord} = 27 - 9 = 18$.<br>3. Synthesize code: $\mathbf{I18}$. | **Selection:** **I18**<br><br>✓ **Invariant Check:** $1+26=27, 3+24=27, 5+22=27, 7+20=27, 9+18=27$. Holds! |
| **C5**<br>`Block Sum Suffix` | **AB3, CD7, EF11, GH15, ?**<br>Pair progression with position sum | 1. Letter pairs: Adjacent disjoint pairs $AB, CD, EF, GH \implies IJ$.<br>2. Suffix rule: Sum of coordinates $I(9) + J(10) = 19$.<br>3. Synthesize code: $\mathbf{IJ19}$. | **Selection:** **IJ19**<br><br>✓ **Trap Check:** $JK21$ skips letter pair progression; $IJ18$ miscalculates $9+10$. |

---

## 10. 🔍 Missing Terms and Wrong Terms (Error Detection & Repair)

### 10.1 Diagnostic Workflow: Generation vs. Detection

Solving for a missing term requires generating an unknown value from surrounding context; identifying a wrong term requires isolating the single outlier that disrupts an otherwise globally consistent rule.

| Problem Mode | Operational Directive | Boundary Verification Protocol |
| :--- | :--- | :--- |
| **Next Term** | Project forward from the final displayed value. | Verify that the discovered rule fits all prior elements without exception. |
| **Missing Middle Term** | Use the left boundary to propose candidate $X$. | **Dual-Sided Sandwich Check:** Confirm that candidate $X$ correctly generates the downstream right boundary term. |
| **Wrong Term Detection** | Locate the term that disrupts **two adjacent differences**. | Confirm that replacing the outlier restores uniform consistency across the entire list. |
| **Correct Replacement** | Calculate the exact value that should replace the outlier. | Clearly distinguish between reporting the wrong number vs. reporting its replacement. |

```text
A wrong internal term distorts TWO consecutive intervals:
Correct Sequence:     4 ──────(+4)──────► 8 ──────(+4)──────► 12 ──────(+4)──────► 16 ──────(+4)──────► 20
Displayed Sequence:   4 ──────(+4)──────► 8 ──────(+4)──────► 12 ──────(+5)──────► 17 ──────(+3)──────► 20
                                                                   ▲
                                                       OUTLIER DETECTED (17)
                                                  (Restoring to 16 fixes both +5 and +3 to +4)
```

> [!WARNING]
> **Minimal Modification Principle:** In single-wrong-term problems, your correction must leave all other terms intact. Never alter a second term to compensate for a faulty initial correction.

<!-- separate learning boxes -->

> **தமிழில்:** நடுவில் விடுபட்ட எண்ணைக் கண்டறியும்போது, இடப்பக்கத்திலிருந்து விதியைச் செலுத்தி விடையைக் காண்பதோடு நில்லாமல், அந்த விடை வலப்பக்கத்தில் உள்ள அடுத்த எண்ணையும் சரியாக உருவாக்குகிறதா (Dual-sided sandwich check) என்று சோதிக்க வேண்டும். தவறான உறுப்பைக் கண்டறியும் போது, ஒரு தவறான எண் இரண்டு இடைவெளிகளைப் பாதிக்கும்; கேள்வியில் 'தவறான எண் எது?' என்று கேட்கிறார்களா அல்லது 'அதற்குப் பதிலாக வரவேண்டிய சரியான எண் எது?' என்று கேட்கிறார்களா என்பதைக் கவனியுங்கள்.

---

### 10.2 Five Worked Analytical Models (E1–E5)

| Model ID | Sequence & Prompt | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **E1**<br>`Arithmetic Blank` | **5, 10, ?, 20, 25**<br>Constant difference sandwich | 1. Observable gaps: $10-5 = +5$ and $25-20 = +5$.<br>2. Project left: $10 + 5 = 15$.<br>3. Sandwich check right: $20 - 5 = 15$. Both converge to $15$. | **Selection:** **15**<br><br>✓ **Check:** Completed series $5, 10, 15, 20, 25$ has constant $\Delta = +5$. |
| **E2**<br>`Odd Gaps Blank` | **2, 5, 10, ?, 26**<br>Consecutive odd differences | 1. Visible gaps: $5-2=3, 10-5=5$. Expected progression: $3, 5, 7, 9$.<br>2. Project left: $10 + 7 = 17$.<br>3. Sandwich check right: $17 + 9 = 26$. Confirmed! | **Selection:** **17**<br><br>✓ **Dual Check:** Both boundary intervals validate $17$ perfectly. |
| **E3**<br>`Geometric Division Blank`| **162, 54, ?, 6, 2**<br>Repeated division by 3 | 1. Left ratio: $54 / 162 = 1/3$; Right ratio: $2 / 6 = 1/3$.<br>2. Project left: $54 / 3 = 18$.<br>3. Sandwich check right: $18 / 3 = 6$. Confirmed! | **Selection:** **18**<br><br>✓ **Check:** Sequence is $2 \times 3^4, 2 \times 3^3, 2 \times 3^2, 2 \times 3^1, 2 \times 3^0$. |
| **E4**<br>`Arithmetic Wrong Term` | **4, 8, 12, 17, 20**<br>Identify outlier in +4 AP | 1. Intervals: $8-4=+4$, $12-8=+4$, $17-12=+5$, $20-17=+3$.<br>2. The consecutive distorted gaps $(+5, +3)$ pinpoint $17$ as the faulty node.<br>3. Correct value is $12 + 4 = 16$. | **Selection:** **Wrong: 17; Replacement: 16**<br><br>✓ **Double Check:** $16 + 4 = 20$. A single correction repairs both gaps to $+4$. |
| **E5**<br>`Polynomial Wrong Term` | **2, 6, 12, 21, 30, 42**<br>Outlier in $n(n+1)$ progression | 1. Formula benchmark: $1(2)=2, 2(3)=6, 3(4)=12, 4(5)=20, 5(6)=30, 6(7)=42$.<br>2. Fourth displayed value is $21$; benchmark requires $20$.<br>3. Correct value is $20$. | **Selection:** **Wrong: 21; Replacement: 20**<br><br>✓ **Gap Cross-Check:** Corrected differences are $4, 6, 8, 10, 12$ (even numbers). |

---

## 11. ✍️ Independent Practice Arena — 40 Graded Diagnostic Questions

> [!IMPORTANT]
> **Diagnostic Protocol:** Complete all 40 questions independently before consulting Section 12. Determine the core generative rule, calculate the target value, and execute boundary checks.

### Set A: Arithmetic & Differential Sequences (Questions 01–05)

<details>
<summary><strong>Question 01: Constant Positive Difference</strong></summary>

* **Sequence:** Continue with a constant difference: **7, 13, 19, 25, ?**
* **Task:** Identify the common difference $\Delta$, verify uniformity across all supplied terms, and compute the 5th term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 02: Constant Negative Difference</strong></summary>

* **Sequence:** Continue with a constant difference: **60, 52, 44, 36, ?**
* **Task:** Identify the negative difference $-\Delta$, check directional continuity, and compute the 5th term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 03: Expanding Odd Gaps / Square Dual-Model</strong></summary>

* **Sequence:** Continue: **4, 9, 16, 25, ?**
* **Task:** Explain using differences; provide a second consistent description using powers.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 04: Expanding Gaps (+2 Increment)</strong></summary>

* **Sequence:** Continue with gaps increasing by 2: **2, 4, 8, 14, 22, ?**
* **Task:** Map first differences, determine the second difference $\Delta^2 = +2$, and calculate the 6th term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 05: Doubling Differences / Affine Stream</strong></summary>

* **Sequence:** Continue with gaps doubling: **2, 5, 11, 23, ?**
* **Task:** Trace differences ($3, 6, 12 \dots$); verify against the affine model $T_n = 2T_{n-1} + 1$, and compute the next term.
* **Target Answer:** `[Enter Value]`
</details>

---

### Set B: Geometric Ratios, Division & Affine Maps (Questions 06–10)

<details>
<summary><strong>Question 06: Constant Multiplication Ratio</strong></summary>

* **Sequence:** Continue with a constant ratio: **5, 15, 45, 135, ?**
* **Task:** Identify constant multiplier $r$, verify against all transitions, and compute the 5th term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 07: Constant Division Ratio</strong></summary>

* **Sequence:** Continue with a constant ratio: **512, 128, 32, 8, ?**
* **Task:** Identify constant divisor $d$, check repeated scaling, and compute the 5th term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 08: Affine Map (Double then Add 1)</strong></summary>

* **Sequence:** Find a simple consistent rule and continue: **4, 9, 19, 39, ?**
* **Task:** Formulate the transformation $T_n = 2T_{n-1} + 1$, verify across all terms, and compute the next term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 09: Affine Map (Double then Subtract 1)</strong></summary>

* **Sequence:** Find a simple consistent rule and continue: **4, 7, 13, 25, ?**
* **Task:** Formulate the transformation $T_n = 2T_{n-1} - 1$, verify across all terms, and compute the next term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 10: Dynamic Multipliers (Factorial Style)</strong></summary>

* **Sequence:** Continue using successive multipliers $2, 3, 4 \dots$: **3, 6, 18, 72, ?**
* **Task:** Identify the next multiplier in the sequence and compute the next term.
* **Target Answer:** `[Enter Value]`
</details>

---

### Set C: Squares, Cubes & Prime Progressions (Questions 11–15)

<details>
<summary><strong>Question 11: Consecutive Perfect Squares</strong></summary>

* **Sequence:** Continue consecutive squares: **9, 16, 25, 36, ?**
* **Task:** Identify the base sequence and compute the 5th term ($7^2$).
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 12: Consecutive Perfect Cubes</strong></summary>

* **Sequence:** Continue consecutive cubes: **1, 8, 27, 64, ?**
* **Task:** Identify the base sequence and compute the 5th term ($5^3$).
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 13: Polynomial Offset Series ($n^2 + 2$)</strong></summary>

* **Sequence:** Continue $n^2 + 2$, starting at $n = 1$: **3, 6, 11, 18, ?**
* **Task:** Apply the benchmark polynomial at position $n=5$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 14: Consecutive Primes Progression</strong></summary>

* **Sequence:** Continue consecutive primes: **5, 7, 11, 13, 17, ?**
* **Task:** Identify the prime nature of the list and select the next prime number after $17$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 15: Prime-Valued Gap Expansion</strong></summary>

* **Sequence:** Continue with consecutive prime gaps starting at 2: **2, 4, 7, 12, 19, ?**
* **Task:** Map gaps ($+2, +3, +5, +7$), identify the next prime gap, and compute the 6th term.
* **Target Answer:** `[Enter Value]`
</details>

---

### Set D: Alternating Operations & Interleaved Streams (Questions 16–20)

<details>
<summary><strong>Question 16: Alternating Operations (+3, ×2)</strong></summary>

* **Sequence:** Continue with alternating $+3, \times 2$: **3, 6, 12, 15, 30, 33, ?**
* **Task:** Track the operational cycle, identify the active phase for the next transition, and compute the term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 17: Interleaved Dual Streams (Odd/Even AP)</strong></summary>

* **Sequence:** Split odd/even positions and continue: **5, 40, 10, 35, 15, 30, ?**
* **Task:** Identify target position index ($n=7$), isolate the odd-position stream, and project forward.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 18: Interleaved Dual Streams (Position 8 Target)</strong></summary>

* **Sequence:** Fill the eighth position using two streams: **2, 10, 4, 20, 6, 30, 8, ?**
* **Task:** Identify target position index ($n=8$), isolate the even-position stream, and compute the value.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 19: Grouped 3-Term Block Structures</strong></summary>

* **Sequence:** Complete the blocks using the same internal relationship: **2, 4, 6 / 3, 6, 9 / 4, 8, ?**
* **Task:** Identify internal block multiplier $[n, 2n, 3n]$ with base $n=4$ and calculate the final element.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 20: Multi-Phase Cycle (+2, ×2, -3)</strong></summary>

* **Sequence:** Continue the repeated $[+2, \times 2, -3]$ cycle: **8, 10, 20, 17, 19, 38, 35, ?**
* **Task:** Determine phase reset point and compute the next term.
* **Target Answer:** `[Enter Value]`
</details>

---

### Set E: Recurrence Rules & Memory Sequences (Questions 21–25)

<details>
<summary><strong>Question 21: Shifted Seed Fibonacci ($T_{n-1} + T_{n-2}$)</strong></summary>

* **Sequence:** Add the preceding two terms: **2, 2, 4, 6, 10, ?**
* **Task:** Verify 2-term sum rule from term 3 onwards, and compute the 6th term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 22: Custom Seed Fibonacci Progression</strong></summary>

* **Sequence:** Add the preceding two terms: **3, 4, 7, 11, 18, ?**
* **Task:** Apply 2-term recurrence to the latest pair $(11, 18)$ and compute the next term.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 23: Tribonacci Progression (Sum of Preceding 3)</strong></summary>

* **Sequence:** Add the preceding three terms: **1, 1, 2, 4, 7, 13, ?**
* **Task:** Isolate the active 3-term sliding window $(4, 7, 13)$ and calculate their sum.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 24: Weighted Recurrence ($2T_{n-1} + T_{n-2}$)</strong></summary>

* **Sequence:** Use $\text{next} = 2 \times \text{latest} + \text{preceding}$: **2, 3, 8, 19, 46, ?**
* **Task:** Apply the exact weighted formula to latest term $46$ and preceding term $19$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 25: Middle Blank Recurrence Sandwich</strong></summary>

* **Sequence:** Fill the blank using the preceding-two sum rule: **2, 5, 7, ?, 19, 31**
* **Task:** Compute candidate from left ($5+7$), then verify downstream ($7+X=19$ and $X+19=31$).
* **Target Answer:** `[Enter Value]`
</details>

---

### Set F: Alphabetic Coordinate Sequences (Questions 26–30)

<details>
<summary><strong>Question 26: Constant Forward Shift</strong></summary>

* **Sequence:** Continue with a constant shift: **D, H, L, P, ?**
* **Task:** Convert to coordinates $(4, 8, 12, 16)$, apply $+4$ shift, and convert back to letter.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 27: Constant Backward Shift</strong></summary>

* **Sequence:** Continue with a constant backward shift: **Y, U, Q, M, ?**
* **Task:** Convert to coordinates $(25, 21, 17, 13)$, apply $-4$ shift, and convert back to letter.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 28: Expanding Coordinate Shift (+2, +3, +4...)</strong></summary>

* **Sequence:** Continue with gaps increasing by 1: **B, D, G, K, P, ?**
* **Task:** Map coordinates and gaps $(+2, +3, +4, +5)$, apply $+6$ to $P(16)$, and convert back to letter.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 29: Dual-Track Multi-Letter Streams</strong></summary>

* **Sequence:** Continue the two fields consistently: **BY, DW, FU, HS, ?**
* **Task:** Process Stream 1 ($B, D, F, H$) and Stream 2 ($Y, W, U, S$) independently; verify opposite pair sum $=27$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 30: Modular Cyclic Alphabet Shift</strong></summary>

* **Sequence:** Continue with $+4$ in a cyclic alphabet: **Y, C, G, K, ?**
* **Task:** Apply $+4$ shift modulo 26, verify transition from $Y(25) \to C(3)$, and find the 5th term.
* **Target Answer:** `[Enter Value]`
</details>

---

### Set G: Alphanumeric & Compound Codes (Questions 31–35)

<details>
<summary><strong>Question 31: Parallel Shift Code</strong></summary>

* **Sequence:** Letters move $+2$; suffixes increase by $1$: **B1, D2, F3, H4, ?**
* **Task:** Apply $+2$ to letter $H(8)$ and $+1$ to numeric suffix $4$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 32: Suffix Equals Letter Coordinate Squared</strong></summary>

* **Sequence:** Suffix = square of the letter's position; letters move $+2$: **C9, E25, G49, I81, ?**
* **Task:** Advance letter to $K(11)$ and compute $11^2$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 33: Suffix Equals Term Index Squared</strong></summary>

* **Sequence:** Letters move $+2$; suffixes are consecutive squares starting at $1^2$: **B1, D4, F9, H16, ?**
* **Task:** Advance letter to $J$ and compute 5th term index squared ($5^2$).
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 34: Suffix Equals Reverse Alphabet Position</strong></summary>

* **Sequence:** Letters move $+2$; suffix = reverse alphabet position: **B25, D23, F21, H19, ?**
* **Task:** Advance letter to $J(10)$ and compute reverse coordinate ($27 - 10$).
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 35: Letter Pair Progression with Sum Suffix</strong></summary>

* **Sequence:** Letter pairs advance in adjacent non-overlapping pairs; suffix = sum of positions: **BC5, DE9, FG13, HI17, ?**
* **Task:** Find next pair after $HI$, convert to positions, and sum them for the numerical suffix.
* **Target Answer:** `[Enter Value]`
</details>

---

### Set H: Missing Term Fill & Wrong Term Detection (Questions 36–40)

<details>
<summary><strong>Question 36: Arithmetic Missing Middle Term</strong></summary>

* **Sequence:** Fill using a constant difference: **6, 12, ?, 24, 30**
* **Task:** Compute from left, verify from right, and confirm complete AP.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 37: Expanding Odd Differences Blank</strong></summary>

* **Sequence:** Fill using odd-number gaps $+3, +5, +7, +9$: **3, 6, 11, ?, 27**
* **Task:** Compute $11 + 7$ and verify that $X + 9 = 27$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 38: Geometric Repeated Division Blank</strong></summary>

* **Sequence:** Fill using repeated division by 2: **128, 64, ?, 16, 8**
* **Task:** Compute $64 / 2$ and confirm that $X / 2 = 16$.
* **Target Answer:** `[Enter Value]`
</details>

<details>
<summary><strong>Question 39: Outlier Detection in Arithmetic Progression</strong></summary>

* **Sequence:** Exactly one term is wrong in a $+5$ sequence: **5, 10, 15, 21, 25, 30**
* **Task:** Identify the outlier and provide its correct replacement value.
* **Target Answer:** `[Enter Wrong Term & Replacement]`
</details>

<details>
<summary><strong>Question 40: Outlier Detection in Shifted Square Series</strong></summary>

* **Sequence:** Exactly one term is wrong in $n^2 - 1$ for consecutive $n$ starting at $2$: **3, 8, 15, 25, 35, 48**
* **Task:** Identify the outlier and provide its correct replacement value.
* **Target Answer:** `[Enter Wrong Term & Replacement]`
</details>

---

## 12. ✅ Master Diagnostic Answer Matrix & Oral Defense Checkpoint

### 12.1 Four-Column Analytical Answer Key (Q01–Q40)

| Q# | Target Answer | Core Mathematical Rule & Formula | Diagnostic Trap & Verification Check |
| :---: | :---: | :--- | :--- |
| **01** | **31** | Constant difference: $\Delta = +6 \implies 25 + 6 = 31$. | ✓ $7, 13, 19, 25, 31$ uniform AP. |
| **02** | **28** | Constant difference: $\Delta = -8 \implies 36 - 8 = 28$. | ✓ Retain negative sign; do not add $8$ ($44$). |
| **03** | **36** | Differences: $+5, +7, +9, +11 \implies 25 + 11 = 36$. Dual: $n^2$ ($2^2 \dots 6^2$). | ✓ Both $\Delta^2 = 2$ and $6^2=36$ converge. |
| **04** | **32** | Gaps grow by $+2$: gaps are $2, 4, 6, 8 \implies$ next gap $10 \implies 22 + 10 = 32$. | ✓ Do not repeat previous $+8$ gap ($30$). |
| **05** | **47** | Doubling gaps: $+3, +6, +12 \implies +24 \implies 23 + 24 = 47$. Dual: $2T_{n-1}+1$. | ✓ Both difference doubling and affine map yield $47$. |
| **06** | **405**| Constant multiplier: $r = 3 \implies 135 \times 3 = 405$. | ✓ Multiplicative growth verified at each step. |
| **07** | **2** | Constant divisor: $d = 4$ (ratio $1/4$) $\implies 8 / 4 = 2$. | ✓ Decreasing geometric progression verified. |
| **08** | **79** | Affine transformation: $T_n = 2T_{n-1} + 1 \implies 2(39) + 1 = 79$. | ✓ Do not forget $+1$ ($78$ is pure doubling). |
| **09** | **49** | Affine transformation: $T_n = 2T_{n-1} - 1 \implies 2(25) - 1 = 49$. | ✓ Dual check: differences double ($3, 6, 12, 24$). |
| **10** | **360**| Dynamic multipliers: $\times 2, \times 3, \times 4 \implies \times 5 \implies 72 \times 5 = 360$. | ✓ Factorial-style scaling: do not repeat $\times 4$. |
| **11** | **49** | Consecutive squares: $3^2, 4^2, 5^2, 6^2 \implies 7^2 = 49$. | ✓ Base progression is $3, 4, 5, 6, 7$. |
| **12** | **125**| Consecutive cubes: $1^3, 2^3, 3^3, 4^3 \implies 5^3 = 125$. | ✓ Exponent is 3; do not confuse with $5^2=25$. |
| **13** | **27** | Shifted square polynomial: $n^2 + 2$ for $n=5 \implies 5^2 + 2 = 27$. | ✓ Evaluated at position $n=5$. |
| **14** | **19** | Consecutive prime progression: $5, 7, 11, 13, 17 \implies 19$. | ✓ $18$ is composite; $19$ is the next true prime. |
| **15** | **30** | Differences are primes: $+2, +3, +5, +7 \implies +11 \implies 19 + 11 = 30$. | ✓ Term itself need not be prime; gap must be prime. |
| **16** | **66** | Alternating operations: $[+3, \times 2]$ cycle. Active phase: $\times 2 \implies 33 \times 2 = 66$. | ✓ Phase check: prior step was $+3$ ($30 \to 33$). |
| **17** | **20** | Interleaved odd stream ($n=1, 3, 5, 7$): $5 \xrightarrow{+5} 10 \xrightarrow{+5} 15 \xrightarrow{+5} 20$. | ✓ Position $7$ belongs to odd stream; ignore even stream. |
| **18** | **40** | Interleaved even stream ($n=2, 4, 6, 8$): $10 \xrightarrow{+10} 20 \xrightarrow{+10} 30 \xrightarrow{+10} 40$. | ✓ Position $8$ belongs to even stream. |
| **19** | **12** | Grouped 3-term block: $[n, 2n, 3n]$. Block 3 has $n=4 \implies 3(4) = 12$. | ✓ Blocks are internally proportional. |
| **20** | **37** | 3-phase cycle $[+2, \times 2, -3]$. After $38-3=35$, reset phase to $+2 \implies 35+2=37$. | ✓ Reset to phase 1 ($+2$); do not repeat $-3$. |
| **21** | **16** | 2-term Fibonacci sum: $T_n = T_{n-1} + T_{n-2} \implies 6 + 10 = 16$. | ✓ Add only latest two terms; do not sum entire series. |
| **22** | **29** | 2-term recurrence with custom seeds $(3, 4)$: $11 + 18 = 29$. | ✓ Invariant holds across all internal transitions. |
| **23** | **24** | 3-term Tribonacci sum: $T_n = T_{n-1} + T_{n-2} + T_{n-3} \implies 4 + 7 + 13 = 24$. | ✓ 3-term window required; $7+13=20$ is incomplete. |
| **24** | **111**| Weighted recurrence: $T_n = 2T_{n-1} + T_{n-2} \implies 2(46) + 19 = 92 + 19 = 111$. | ✓ Double the latest term ($46$), add preceding ($19$). |
| **25** | **12** | Middle blank sandwich check: $5 + 7 = 12$; check $7 + 12 = 19$ and $12 + 19 = 31$. | ✓ Both forward and downstream terms confirmed. |
| **26** | **T**  | Alphabetic forward shift: $D(4) \xrightarrow{+4} H(8) \xrightarrow{+4} L(12) \xrightarrow{+4} P(16) \implies 20 \to \mathbf{T}$. | ✓ Constant $+4$ coordinate shift verified. |
| **27** | **I**  | Alphabetic backward shift: $Y(25) \xrightarrow{-4} U(21) \xrightarrow{-4} Q(17) \xrightarrow{-4} M(13) \implies 9 \to \mathbf{I}$. | ✓ Constant $-4$ coordinate shift verified. |
| **28** | **V**  | Expanding letter gaps: $+2, +3, +4, +5 \implies +6$. $P(16) + 6 = 22 \to \mathbf{V}$. | ✓ Coordinate $22$ corresponds to letter $V$. |
| **29** | **JQ** | Dual streams: Stream 1 is $+2$ ($B, D, F, H \to J$); Stream 2 is $-2$ ($Y, W, U, S \to Q$). | ✓ Opposites check: $J(10) + Q(17) = 27$. Perfectly matches. |
| **30** | **O**  | Cyclic modulo 26 shift: $+4$ throughout. $K(11) + 4 = 15 \to \mathbf{O}$. | ✓ Wraparound $Y(25) \xrightarrow{+4} C(3)$ confirmed. |
| **31** | **J5** | Parallel shift: Letter $H(8) + 2 = 10 \to J$; Suffix $4 + 1 = 5$. | ✓ Independent field progression. |
| **32** | **K121**| Coordinate squared: Next letter is $K(11)$; suffix is $11^2 = 121$. | ✓ Do not square term position ($5^2=25$). |
| **33** | **J25**| Term index squared: Next letter is $J(10)$; suffix is $5^2 = 25$. | ✓ Do not square letter coordinate ($10^2=100$). |
| **34** | **J17**| Reverse coordinate: Next letter is $J(10)$; suffix is $27 - 10 = 17$. | ✓ Invariant sum: $10 + 17 = 27$. |
| **35** | **JK21**| Adjacent pairs + coordinate sum: Next pair is $JK$; sum is $10 + 11 = 21$. | ✓ Both pair continuity and coordinate sum match. |
| **36** | **18** | Arithmetic blank: $+6$ gap throughout. $12 + 6 = 18$ and $18 + 6 = 24$. | ✓ Dual-sided sandwich confirmation. |
| **37** | **18** | Odd-number differences: $11 + 7 = 18$; check downstream $18 + 9 = 27$. | ✓ Both boundaries fit perfectly. |
| **38** | **32** | Geometric division: $64 / 2 = 32$; check downstream $32 / 2 = 16$. | ✓ Constant divisor $d=2$ verified. |
| **39** | **Wrong: 21; Repl: 20** | Outlier detection: $+5$ AP requires $15 + 5 = 20$. Displayed $21$ distorts two gaps. | ✓ Single correction ($20$) restores both gaps to $+5$. |
| **40** | **Wrong: 25; Repl: 24** | Polynomial series $n^2 - 1$: At $n=5$, term is $5^2 - 1 = 24$. Displayed $25$ is outlier. | ✓ Sequence $3, 8, 15, 24, 35, 48$ restores $+4, +6, +8, +10, +12$. |

---

### 12.2 Oral Defense Checkpoint: 5 Mandatory Conceptual Distinctions

Can you articulate these 5 fundamental principles without looking at notes?

1. **Next Gap vs. Next Term:** The gap ($\Delta_n$) is the mathematical increment; the next term ($T_{n+1}$) is obtained by adding the gap to the last term ($T_n + \Delta_n$). Never write down the gap as the final answer!
2. **Alternating Operations vs. Interleaved Streams:** Alternating operations maintain a single sequence where the transformation rule changes cyclically ($+3, \times 2, +3 \dots$); interleaved streams consist of two independent sequences running on alternate positions (odd indices vs. even indices).
3. **Term Position Index ($n$) vs. Alphabet Coordinate ($\text{coord}$):** Term index $n$ represents the ordinal position in the list ($n=1, 2, 3 \dots$); alphabet coordinate is the intrinsic letter index ($A=1 \dots Z=26$). In alphanumeric problems, verify whether suffixes depend on $n$ or $\text{coord}$.
4. **Dual-Sided Sandwich Verification:** When evaluating a missing internal term, calculating from the left side is only a hypothesis. You must confirm that the proposed candidate generates the next right-hand term under the identical rule.
5. **Wrong Term Identified vs. Correct Replacement Stated:** Distinguish between identifying the faulty displayed number (the bug) and stating what it ought to be (the fix). Read the exam prompt carefully to see which value is requested!

---

## 13. 🔁 Revision Architecture, Trap Matrix, Scorecard & Chapter Progress

### 13.1 Systematic Sequence Diagnostic Flowchart

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       SEQUENCE DIAGNOSTIC PROTOCOL                          │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                        [1. INSPECT BEHAVIOR & LENGTH]
                                       │
        ┌──────────────────────────────┴──────────────────────────────┐
        ▼                                                             ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│ MONOTONIC (Strictly Up/Down) │              │ NON-MONOTONIC / OSCILLATING  │
└──────────────┬───────────────┘              └──────────────┬───────────────┘
               │                                             │
      [Evaluate Growth Rate]                     [Check Structure Type]
               │                                             │
   ┌───────────┼───────────┐                     ┌───────────┴───────────┐
   ▼           ▼           ▼                     ▼                       ▼
┌───────┐  ┌───────┐  ┌─────────┐          ┌──────────────┐      ┌──────────────┐
│ SLOW  │  │ FAST  │  │EXPLOSIVE│          │ ALTERNATING  │      │ INTERLEAVED  │
│ (AP)  │  │ (GP)  │  │(Powers) │          │  OPERATIONS  │      │ DUAL STREAMS │
├───────┤  ├───────┤  ├─────────┤          ├──────────────┤      ├──────────────┤
│Δ or Δ²│  │×r / ÷d│  │n², n³,  │          │Single stream │      │Split Odd and │
│ gaps  │  │affine │  │primes   │          │[+a, ×b, +a]  │      │Even indices  │
└───────┘  └───────┘  └─────────┘          └──────────────┘      └──────────────┘
               │                                             │
               └──────────────────────┬──────────────────────┘
                                      │
                         [2. MULTI-INPUT CHECK]
                                      ▼
                        ┌───────────────────────────┐
                        │ RECURRENCE / MEMORY RULES │
                        │  T_n = T_{n-1} + T_{n-2}  │
                        │ Tribonacci / Weighted Sum │
                        └─────────────┬─────────────┘
                                      │
                         [3. CODES & WRONG TERMS]
                                      ▼
                        ┌───────────────────────────┐
                        │ ALPHABETIC & ALPHANUMERIC │
                        │ Field Separation, Mod 26  │
                        │ Dual-Sided Sandwich Check │
                        └───────────────────────────┘
```

---

### 13.2 High-Frequency Trap Matrix (9-Point Error Taxonomy)

| Trap ID | Sequence Family | Typical Blunder / Cognitive Shortcut | Mathematical Prevention & Verification Rule |
| :---: | :--- | :--- | :--- |
| **T1** | Differences | Submitting the next gap $\Delta_n$ instead of the next term $T_{n+1}$. | Explicitly write $T_{n+1} = T_n + \Delta_n$ before marking the choice. |
| **T2** | Ratios | Assuming all fast growth is multiplication, ignoring affine maps ($aT \pm b$). | Test the exact ratio across multiple steps; check if gaps grow geometrically. |
| **T3** | Affine Maps | Altering operational precedence: evaluating $(T+1)\times 2$ instead of $2T+1$. | Strictly enforce order of operations; invert with $(T_{\text{next}} - b)/a$. |
| **T4** | Powers/Primes | Confusing base position when squares begin at an offset ($3^2, 4^2 \dots$). | Index the bases explicitly: $b_n = n + c$. Do not assume base begins at $1$. |
| **T5** | Primes | Selecting the next odd number (e.g., $15$) instead of the next prime ($17$). | Screen candidates for divisibility; remember $9, 15, 21, 25, 27$ are composite! |
| **T6** | Interleaved | Projecting the wrong stream (e.g., applying even rule to odd target position). | Count position index $n$: if target is position 7, trace odd positions only! |
| **T7** | Recurrence | Summing all preceding numbers instead of only the specific sliding window. | Explicitly bound the window: Fibonacci uses latest 2; Tribonacci uses latest 3. |
| **T8** | Alphanumerics | Conflating alphabet coordinate with series term index $n$ in suffixes. | Test both hypotheses against terms 2 and 3 before finalizing the suffix rule. |
| **T9** | Wrong Terms | Selecting a candidate that repairs one gap while leaving another gap broken. | Verify that the single replacement restores uniform consistency across all terms. |

---

### 13.3 Error Repair Register (Surgical Template)

Maintain this log in your physical Reasoning Error Notebook. Log every practice and mock failure:

| Date / Source | Question & Series | My Faulty Answer & Proposed Rule | Root Cause Classification | Exact Mathematical Repair | Fresh Unaided Retry Date |
| :---: | :--- | :--- | :--- | :--- | :---: |
| *Example* | Q39: `5, 10, 15, 21, 25, 30` | Marked `21` but wrote `21` as answer | Misread Question Prompt | Asked for replacement (`20`), not outlier | `[Passed Date]` |
| `___` | `___________________` | `___________________` | `[T1–T9 Classification]` | `___________________` | `___` |
| `___` | `___________________` | `___________________` | `[T1–T9 Classification]` | `___________________` | `___` |
| `___` | `___________________` | `___________________` | `[T1–T9 Classification]` | `___________________` | `___` |

---

### 13.4 Spaced Revision Chapter Scorecard

Track your mastery according to the [Exam Master Plan](../../Plan/FINAL-PLAN-NOV2026-MAY2027.md). Passing threshold requires **$\ge 70\%$ on fresh unaided basics** ($28/40$) and **$\ge 80\%$ on timed execution** ($32/40$).

| Core Skill / Section Module | Questions | Fresh Unaided Score | Error Repair Done | Day 7 Retention Check | Day 21 Master Check |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Differences & Gaps** (Sec 3 / Set A) | Q01–Q05 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **Ratios & Affine Maps** (Sec 4 / Set B) | Q06–Q10 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **Powers, Cubes & Primes** (Sec 5 / Set C) | Q11–Q15 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **Alternating & Interleaved** (Sec 6 / Set D) | Q16–Q20 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **Recurrence Rules** (Sec 7 / Set E) | Q21–Q25 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **Alphabetic Coordinates** (Sec 8 / Set F) | Q26–Q30 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **Alphanumeric Codes** (Sec 9 / Set G) | Q31–Q35 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **Missing & Wrong Terms** (Sec 10 / Set H) | Q36–Q40 | `___ / 5` | [ ] | `___ / 5` | `___ / 5` |
| **TOTAL CHAPTER MASTERY** | **Q01–Q40**| **`___ / 40`** | **Passing: 28+ (70%)** | **Target: 32+ (80%)** | **Mastery: 36+ (90%)** |

<!-- separate learning boxes -->

> **தமிழில்:** விதியைக் கண்டுபிடித்தவுடன் அவசரப்பட்டு பதிலை டிக் செய்யாதீர்கள். தொடரின் அனைத்து உறுப்புகளிலும் அவ்விதியைச் சரிபார்த்து, சரியான இடத்திற்கான மதிப்பை கணக்கிட்டு, மீண்டும் தொடரில் பொருத்திப் பாருங்கள் (Double Check). வேகம் தானாக வரும்; முதலில் பிழையின்றி சரியான விடையைக் காண்பதே வெற்றிக்கான வழி.

---

### 13.5 Ten-Point Master Audit Checklist

Before transitioning to downstream modules, verify your readiness against these 10 gates:

- [ ] **Gate 1:** I can instantly recall the forward and reverse coordinates ($A=1 \dots Z=26$) and opposite pair sums ($=27$).
- [ ] **Gate 2:** I can distinguish between constant differences ($\Delta$) and changing differences ($\Delta^2$).
- [ ] **Gate 3:** I distinguish geometric scaling ($\times r$) from affine maps ($aT \pm b$).
- [ ] **Gate 4:** I can recognize benchmark powers ($n^2, n^3$) and identify whether they reside in terms or gaps.
- [ ] **Gate 5:** I can filter prime progressions from odd-number sequences without stumbling on $9, 15, 21$.
- [ ] **Gate 6:** I can deconstruct oscillating series into alternating operations vs. interleaved odd/even streams.
- [ ] **Gate 7:** I can solve multi-input recurrence rules (Fibonacci and Tribonacci) using active sliding windows.
- [ ] **Gate 8:** I can separate alphanumeric strings into independent fields or map functional dependencies.
- [ ] **Gate 9:** I execute dual-sided sandwich checks on all missing middle terms and verify replacements for wrong terms.
- [ ] **Gate 10:** I have achieved $\ge 80\%$ on the 40 diagnostic practice questions and logged all errors in my register.

---

### 13.6 Curriculum Forward Bridge

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CURRICULUM ROADMAP                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  [COMPLETED] R07: Number, Letter & Alphanumeric Series                      │
│       ▼                                                                     │
│  [NEXT STEP] R12: Finding the Missing Number (Matrix, Circle, Grid Patterns) │
│       ▼                                                                     │
│  [UPCOMING]  R08: Coding-Decoding (Letter, Number, Substitution Logic)      │
│       ▼                                                                     │
│  [LATER]     R19: Figural Series & Non-Verbal Pattern Logic                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Next in your checklist:** [`R12 — Finding the Missing Number`](file:///d:/Thiyo/Prep/Notes/Reasoning/), followed by [`R08 — Coding-Decoding`](file:///d:/Thiyo/Prep/Notes/Reasoning/). R19 — Figural Series remains a separate later topic.

