# 🔐 R08 — Coding-Decoding: Ciphers, Tables and Operations
### குறியீடாக்கம் மற்றும் குறியீட்டை அறிதல் | Core Reasoning Masterclass

> 🎯 **Mastery Target:** Master cipher mechanics across alphabetical shifts ($p \pm k \pmod{26}$), reverse-order rearrangements, opposite-letter pairs ($27 - p$), numerical positional mapping, fictitious language matrix elimination, renaming logic ("X is called Y"), and multi-step inverse decoding.
> ⏱️ **Target Speed & Accuracy:** $\le 30\text{ sec / question}$ | $\ge 80\%$ First-Attempt Accuracy.
> 📌 **Prerequisites:** [RF1 — Letters and Numbers](00-RF1-Letters-and-Numbers.md), [RF2 — Instructions and Relationships](00-RF2-Instructions-and-Relationships.md). Related: [R07 — Series](03-R07-Series.md) & [R12 — Finding Missing Number](04-R12-Finding-the-Missing-Number.md).

---

### 🗺️ Module Architecture & Roadmap

```text
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                    R08: CIPHER RECOGNITION & REASONING ENGINE                           │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────┤
│  PILLAR 1   │  PILLAR 2   │  PILLAR 3   │  PILLAR 4   │  PILLAR 5   │  PILLAR 6   │ P7  │
│ Letter      │ Reversals & │ Number &    │ Fictitious  │ Renaming    │ Symbol &    │Multi│
│ Shifts      │ Opposites   │ Positions   │ Languages   │ "X called Y"│ Condition   │Step │
│ (L1–L5)     │ (B1–B5)     │ (N1–N5)     │ (W1–W5)     │ (R1–R5)     │ (T1–T5)     │(M1-5│
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────┘
```

| Route Stage | Focus Sections | Core Analytical Objective | Passing Gate |
| :---: | :--- | :--- | :---: |
| **Stage 1: Core Foundations** | Sections 1–2 | Master 3 positional scales, opposite pairs ($27-p$), and cyclic modular wrapping | $\ge 80\%$ |
| **Stage 2: Letter & Number Ciphers** | Sections 4–6 (L1–N5) | Decode constant/variable shifts, rearrangements, and positional arithmetic sums | $\ge 80\%$ |
| **Stage 3: Linguistic & Symbolic Codes** | Sections 7–9 (W1–T5) | Solve fictitious sentence matrices, one-way renaming chains, and table conditions | $\ge 80\%$ |
| **Stage 4: Multi-Step & Inversions** | Section 10 (M1–M5) | Formulate reverse transformations; undo composite multi-stage ciphers | $\ge 80\%$ |
| **Stage 5: Practice & Diagnostics** | Sections 11–15 | Complete dated CGL/RRB PYQs and 15 independent challenges; log error repairs | 12/15 ($\ge 80\%$) |

> ℹ️ **Pedagogical Note:** All 35 worked models and 15 independent practice challenges are structured teaching exercises designed to train systematic falsification and prevent superficial guessing. Finite examples deliberately demonstrate when evidence is conclusive vs. ambiguous.

---

### 🌳 Coding-Decoding Decision Architecture Tree

```text
                     INSPECT THE INPUT AND OUTPUT FORMATS
                                      │
     ┌────────────────┬───────────────┼───────────────┬────────────────┐
     ▼                ▼               ▼               ▼                ▼
[WORD → WORD]   [WORD → NUMBER]  [SENTENCES]     ["X IS CALLED Y"] [TABLE LOOKUP]
 (Same Length)   (Value / Array) (Token Groups)  (Renaming Chain)  (With Rules)
     │                │               │               │                │
     ├─ Constant      ├─ Sum / Prod   ├─ Intersect    ├─ Identify Real ├─ Direct
     │  Shift (+k)    │  of Pos       │  Shared Words │  Object First  │  Token Match
     ├─ Opposite      ├─ Concatenate  ├─ Eliminate    ├─ Follow Single ├─ Endpoint
     │  Letter (27-p) │  Positions    │  Common Tokens│  Outgoing Arrow│  Condition
     └─ Reversal /    └─ Word Length  └─ Isolate      └─ Do NOT Loop   └─ Case
        Permutation      Power (n³)      Residuals       Without Order    Sensitivity
```

---

## 1. 📘 What Does Coding-Decoding Mean?

### 1.1 The Encoding vs. Decoding Duality

- **Coding (குறியீடாக்கம்):** Transforming source information (plaintext) into an obfuscated format (ciphertext) according to an explicit deterministic rule.
- **Decoding (குறியீட்டை அறிதல்):** Reversing the transformation rule to reconstruct the original plaintext from the cipher output.

Consider a simple $+1$ forward alphabetical shift: **CAT → DBU**:

| Plaintext Letter | Alphabet Position | Forward Shift Rule | Coded Letter (Output) |
| :---: | :---: | :---: | :---: |
| **C** | $3$ | $+1$ forward step | **D** ($4$) |
| **A** | $1$ | $+1$ forward step | **B** ($2$) |
| **T** | $20$ | $+1$ forward step | **U** ($21$) |

To decode **DBU** back to **CAT**, reverse the operation by shifting each character $-1$ backward: **DBU → CAT**.

> [!IMPORTANT]
> **Lossless vs. Lossy Transformations:**
> A letter-shift code is **lossless** (1-to-1 bijection; uniquely decodable). However, a whole-word numerical sum like $\text{CAT} \to 3 + 1 + 20 = 24$ is **lossy**—it destroys letter sequence and identity. Both $\text{BAT}$ ($2+1+20=23$) and $\text{TAB}$ ($20+1+2=23$) yield $23$. You cannot uniquely decode an original word from a sum alone!

<!-- separate learning boxes -->

> **தமிழில்:** ஒரு குறிப்பிட்ட விதியைப் பயன்படுத்தி தகவலை மாற்றுவது **Coding**. அதே விதியை எதிர்திசையில் பயன்படுத்தி மூலத் தகவலை மீண்டும் பெறுவது **Decoding**. ஆனால் எண்களைக் கூட்டி ஒற்றை எண்ணாக மாற்றும் குறியீடுகளில் (Lossy code), எழுத்துகளின் வரிசை மறைந்துவிடுவதால் மூலச் சொல்லை மீண்டும் தனித்துவமாகப் பெற முடியாது.

---

### 1.2 Core Glossary & Operational Lexicon

| Term | Tamil Equivalent | Operational Definition in R08 |
| :--- | :--- | :--- |
| **Original / Plaintext** | அசல் / உள்ளீடு | The unmodified input message or word before coding. |
| **Code / Ciphertext** | குறியீடு / வெளியீடு | The resulting output message after applying the transformation. |
| **Shift** | எழுத்து இடமாற்றம் | Moving forward ($+k$) or backward ($-k$) along the alphabet scale. |
| **Reverse** | வரிசையைத் திருப்பு | Reading or writing existing characters in inverted sequence (last to first). |
| **Opposite Letter** | எதிர் எழுத்து | Complementary alphabet pairs whose forward ranks sum to $27$ ($A \leftrightarrow Z$). |
| **Substitute** | பதிலாக அமை | Replacing a letter or word with an arbitrarily assigned character or token. |
| **Token** | குறியீட்டுத் துண்டு | An indivisible code unit (e.g., `ka`, `27`, `#`, `@`). |
| **Case-Sensitive** | எழுத்து வடிவம் சார்ந்தது | Distinguishing capital letters ($A$) from small letters ($a$). |
| **Condition** | நிபந்தனை | A conditional override applied only when specific criteria are satisfied. |
| **Consistent** | ஒரே விதமாகப் பொருந்துவது | A transformation rule that holds true across 100% of the given examples. |

---

### 1.3 Rapid Format Recognition Matrix

| Observed Input-Output Pattern | Primary Candidate Hypothesis to Test | Section Reference |
| :--- | :--- | :---: |
| **Word $\to$ Word (Equal Length)** | Direct letter shifts ($\pm k$), reversal, or opposite pairs ($27-p$). | Sections 4 & 5 |
| **Word $\to$ Number / Number String** | Alphabet position values, position sum, product, or word length ($n, n^2, n^3$). | Section 6 |
| **Multiple Sentences $\to$ Token Groups** | Fictitious language: sentence intersections and shared-token elimination. | Section 7 |
| **"X is called Y, Y is called Z"** | Renaming chain: identify real-world object, take exactly one outgoing arrow. | Section 8 |
| **Table with Symbols & Conditions** | Direct token lookup, checking case-sensitivity and endpoint overrides. | Section 9 |
| **Multi-Stage Sequential Transformations** | Composite operations: maintain intermediate scratch-line; decode backwards. | Section 10 |

---

## 2. 🔤 Foundational Mechanics: Positional Coordinates & Modular Arithmetic

### 2.1 Alphabet Coordinate Scales & Opposite Pairs

Every letter in the English alphabet possesses two complementary positional values:
- **Forward Position ($p$):** 1-based index counting from $A=1$ to $Z=26$.
- **Reverse Position ($p_{\text{rev}}$):** 1-based index counting from $Z=1$ to $A=26$.

$$\text{Forward Position } (p) + \text{Reverse Position } (p_{\text{rev}}) = 27 \implies p_{\text{rev}} = 27 - p$$

```text
Forward:  A  B  C  D  E  F  G  H  I  J  K  L  M
Rank (p): 1  2  3  4  5  6  7  8  9  10 11 12 13
          ↕  ↕  ↕  ↕  ↕  ↕  ↕  ↕  ↕  ↕  ↕  ↕  ↕
Opposite: Z  Y  X  W  V  U  T  S  R  Q  P  O  N
Rank:     26 25 24 23 22 21 20 19 18 17 16 15 14
```

| Memory Aid (Mnemonic) | Forward Letter & Rank ($p$) | Opposite Letter & Rank ($27-p$) | Sum Invariant ($p + p_{\text{rev}}$) |
| :--- | :---: | :---: | :---: |
| **A-Z** (Amazon / Alphabet) | $A = 1$ | $Z = 26$ | $1 + 26 = 27$ |
| **B-Y** (Boy / Bye) | $B = 2$ | $Y = 25$ | $2 + 25 = 27$ |
| **C-X** (Crux / Coca-cola) | $C = 3$ | $X = 24$ | $3 + 24 = 27$ |
| **D-W** (Dew / Down) | $D = 4$ | $W = 23$ | $4 + 23 = 27$ |
| **E-V** (Even / Love) | $E = 5$ | $V = 22$ | $5 + 22 = 27$ |
| **F-U** (Full / Fuel) | $F = 6$ | $U = 21$ | $6 + 21 = 27$ |
| **G-T** (GT Road / Great) | $G = 7$ | $T = 20$ | $7 + 20 = 27$ |
| **H-S** (High School) | $H = 8$ | $S = 19$ | $8 + 19 = 27$ |
| **I-R** (Indian Railway) | $I = 9$ | $R = 18$ | $9 + 18 = 27$ |
| **J-Q** (Jungle Queen / Jack) | $J = 10$ | $Q = 17$ | $10 + 17 = 27$ |
| **K-P** (Kurta Pyjama / PK) | $K = 11$ | $P = 16$ | $11 + 16 = 27$ |
| **L-O** (Love / Lion) | $L = 12$ | $O = 15$ | $12 + 15 = 27$ |
| **M-N** (Man / Morning) | $M = 13$ | $N = 14$ | $13 + 14 = 27$ |

> [!WARNING]
> **Letter vs. Numerical Rank:**
> The opposite letter of $D$ is $W$. The reverse numerical position of $D$ is $23$. While $W$ has forward rank $23$, **$W$ is a character and $23$ is an integer**. Never output a number when a letter is requested, or vice versa!

<!-- separate learning boxes -->

> **தமிழில்:** ஓர் எழுத்தின் நேர்திசை இடமதிப்பும் (Forward rank), அதன் எதிர் எழுத்தின் இடமதிப்பும் (Reverse rank) கூடினால் எப்போதும் $27$ வரும் ($p + p_{\text{rev}} = 27$). எ.கா: D-இன் இடமதிப்பு $4$; அதன் எதிர் எழுத்து W-இன் இடமதிப்பு $23$ ($4 + 23 = 27$).

---

### 2.2 The Three Independent Positional Scales

Never confuse these three distinct positional frameworks:

```text
Example Word: C  A  B
              │  │  │
1. Word Position:      1st 2nd 3rd   (Sequential slot inside the word)
2. Alphabet Value:      3   1   2    (Standard forward position: A=1...Z=26)
3. Sentence Position:  "CAB is blue" → CAB is the 1st word in the sentence
```

If an exam instruction states: *"Shift letters at odd positions by $+2$"*, verify whether it refers to:
- Letters at **odd word slots** (1st, 3rd, 5th letter of the word), or
- Letters with **odd alphabet ranks** ($A=1, C=3, E=5 \dots$).

---

### 2.3 Modular Cyclic Wraparound

In standard competitive reasoning, the English alphabet operates as a **closed cyclic ring of 26 elements**:

$$\text{Forward Wraparound: } p_{\text{new}} = (p + k - 1) \pmod{26} + 1$$
$$\text{Backward Wraparound: } p_{\text{new}} = (p - k - 1 + 26) \pmod{26} + 1$$

- $Y$ ($25$) shifted $+3$: $25 + 3 = 28 \implies 28 - 26 = 2 \implies \mathbf{B}$.
- $B$ ($2$) shifted $-3$: $2 - 3 = -1 \implies -1 + 26 = 25 \implies \mathbf{Y}$.

<!-- separate learning boxes -->

> **தமிழில்:** ஆங்கில எழுத்துகள் வட்ட வடிவில் அமைந்தவை. Z-க்கு அடுத்த எழுத்து A; அதேபோல A-க்கு முந்தைய எழுத்து Z. $Y (+3) \to Z \to A \to B$.

---

## 3. 🎯 Systematic Answer-Finding Protocol & Evidence Hierarchy

### 3.1 The 7-Step Analytical Solving Protocol

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                 7-STEP CODING-DECODING REASONING PROTOCOL                   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
  [STEP 1: Identify Task Goal] ────────┼── Encode, decode, find a single token, or rename?
  [STEP 2: Read Rule Constraints] ─────┼── Case-sensitive? Cyclic? Whole-word sum vs. array?
  [STEP 3: Align Input & Output] ──────┼── Align corresponding letters or sentence tokens side by side.
  [STEP 4: Formulate Candidate Rule] ──┼── Test constant shift, reversal, opposite pair, or lookup.
  [STEP 5: Multi-Point Verification] ──┼── Test rule on ALL letters of the word and ALL completed sets.
  [STEP 6: Apply to Target Unit] ──────┼── Preserve directional signs, order, and stated conditions.
  [STEP 7: Backward Cross-Check] ──────┼── Decode output back to source to verify 100% mathematical match.
```

---

### 3.2 Falsification Protocol: Overcoming Partial Matches

A candidate rule that explains only the first letter or first word is **statistically invalid**:

| Candidate Evidence | Validation Status | Mandatory Action |
| :--- | :--- | :--- |
| **Matches 1st Letter Only** | ❌ **Incomplete** | Test remaining letters; variable shifts ($+1, +2, +3$) frequently mimic constant shifts at letter 1. |
| **Matches Example 1, Fails Example 2**| ❌ **Falsified** | Discard rule immediately; do not alter constants midway. |
| **Two Competing Rules Fit All Data** | 🔍 **Ambiguous** | Check options; if both exist, verify question constraints or official key. |
| **Direct Instruction Override** | ⚠️ **Binding** | Explicit rules (e.g., "swap 1st and last digits") take priority over standard tables. |

<!-- separate learning boxes -->

> **தமிழில்:** முதல் எழுத்து மட்டும் சரியானால் போதாது; சொல்லில் உள்ள அனைத்து எழுத்துகளிலும் அந்த விதி பொருந்துகிறதா என்பதைப் பார்க்க வேண்டும். CAT $\to$ D... என்றவுடன் $+1$ என்று முடிவெடுக்கக் கூடாது; அது $+1, +2, +3$ ஆகவும் இருக்கலாம்.

---

## 4. ➡️ Letter Shifts (Pillar 1)

### 4.1 Positional Alignment Technique

Align plaintext and ciphertext with their forward numerical ranks to expose the transformation vector:

```text
Plaintext:    C (3)    A (1)    T (20)
Ciphertext:   E (5)    C (3)    V (22)
              ─────    ─────    ──────
Shift Vector:  +2       +2       +2     ==> Constant Shift: +2
```

### 4.2 Five Worked Analytical Models (L1–L5)

| Model ID | Input Examples & Target | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **L1**<br>`Constant Forward Shift` | `CAT → DBU`<br>`DOG → EPH`<br>Encode **HEN** | 1. Analyze CAT: $C(3)+1=D(4)$, $A(1)+1=B(2)$, $T(20)+1=U(21) \implies \text{All } +1$.<br>2. Confirm on DOG: $D+1=E$, $O+1=P$, $G+1=H \implies \text{Confirmed } +1$.<br>3. Apply to HEN: $H(8)+1=I(9)$, $E(5)+1=F(6)$, $N(14)+1=O(15)$. | **Selection:** **IFO**<br><br>✓ **Check:** Inverting $IFO$ by $-1$ recovers $HEN$. |
| **L2**<br>`Backward Shift Decoding` | Rule: Encodes by $-2$.<br>`FISH → DGQF`<br>`LION → JGML`<br>Decode **RGECP** | 1. Encoding rule is $-2$. Therefore, **decoding requires $+2$**.<br>2. Invert each letter: $R(18)+2=T(20)$, $G(7)+2=I(9)$, $E(5)+2=G(7)$, $C(3)+2=E(5)$, $P(16)+2=R(18)$.<br>3. Reconstructed plaintext: $T-I-G-E-R$. | **Selection:** **TIGER**<br><br>✓ **Direction Trap:** Decoding requires reversing the vector ($-2 \to +2$). Shifting $-2$ yields $PECAN$, an erroneous double-encoding blunder. |
| **L3**<br>`Cyclic Wraparound Shift` | Rule: Shift $+3$ in cyclic alphabet.<br>Encode **YAK** | 1. Letter $Y$ ($25$): $25 + 3 = 28$. Wrap modulo 26: $28 - 26 = 2 \implies B$.<br>2. Letter $A$ ($1$): $1 + 3 = 4 \implies D$.<br>3. Letter $K$ ($11$): $11 + 3 = 14 \implies N$.<br>4. Assemble cipher: $BDN$. | **Selection:** **BDN**<br><br>✓ **Modular Check:** $B(2) - 3 = -1 + 26 = 25 \implies Y$. Order is strictly preserved. |
| **L4**<br>`Variable Increasing Shifts` | `CAT → DCW`<br>`DOG → EQJ`<br>Encode **PEN** | 1. Analyze CAT: $C(3)+1=D$, $A(1)+2=C$, $T(20)+3=W \implies \text{Shifts are } +1, +2, +3$.<br>2. Confirm on DOG: $D+1=E$, $O+2=Q$, $G+3=J \implies \text{Confirmed}$.<br>3. Apply to PEN: $P(16)+1=Q(17)$, $E(5)+2=G(7)$, $N(14)+3=Q(17)$. | **Selection:** **QGQ**<br><br>✓ **Double Output Trap:** Both $P$ and $N$ map to $Q$, because different inputs undergo different position-dependent shifts. |
| **L5**<br>`Alternating Parity Shifts` | Rule: Odd word position $+1$; Even word position $-1$.<br>Encode **MAMA** | 1. Label word positions: $M_1 A_2 M_3 A_4$.<br>2. Position 1 (Odd): $M + 1 = N$. Position 2 (Even): $A - 1 = Z$ (Cyclic wrap).<br>3. Position 3 (Odd): $M + 1 = N$. Position 4 (Even): $A - 1 = Z$.<br>4. Read composite output: $NZNZ$. | **Selection:** **NZNZ**<br><br>✓ **Core Lesson:** The identical input letter ($A$) maps to different outputs depending on its positional coordinate within the word. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **L2:** Decode செய்யும்போது குறியீட்டு விதியைத் தலைகீழாக மாற்ற வேண்டும் ($-2 \to +2$).
> - **L4 & L5:** எழுத்துகள் இருக்கும் இடத்திற்கு ஏற்ப நகர்வுகள் மாறலாம் ($+1, +2, +3$). ஒரே எழுத்து ($A$) சொல்லின் வெவ்வேறு இடங்களில் வரும்போது வெவ்வேறு குறியீடுகளைப் பெறலாம்.

---

## 5. 🔄 Reversals, Rearrangements & Opposite Letters (Pillar 2)

### 5.1 Three Visually Similar but Distinct Operations

| Operation Type | What Changes? | Example using `CAT` | Example using `PLANT` |
| :--- | :--- | :---: | :---: |
| **Full Word Reversal** | Inverts entire string order (last $\to$ first). | `TAC` | `TNALP` |
| **Endpoint Pair Swap** | Swaps first and last letters only; interior stays intact. | `TAC` | `TLANP` |
| **Opposite Alphabet Substitution** | Replaces each letter by its $27-p$ complement; order unchanged. | `XZG` | `KOZMG` |

> [!CAUTION]
> On a 3-letter word like `CAT`, full reversal (`TAC`) and endpoint swapping (`TAC`) produce identical outputs! Never rely on a single 3-letter example to deduce a rearrangement rule. A longer test word like `PLANT` is mandatory to distinguish them.

<!-- separate learning boxes -->

> **தமிழில்:** சொல்லைத் திருப்புவதும் (Reversal), முதல் மற்றும் கடைசி எழுத்தை மட்டும் மாற்றுவதும் (Endpoint swap) 3 எழுத்துச் சொல்லில் ஒரே மாதிரி இருக்கும். ஆனால் 5 எழுத்துச் சொல்லில் அவை வேறுபடும்.

---

### 5.2 Five Worked Analytical Models (B1–B5)

| Model ID | Input Examples & Target | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **B1**<br>`Full String Reversal` | `PEN → NEP`<br>`TABLE → ELBAT`<br>Encode **TRAIN** | 1. Both examples preserve exact letter identities but reverse reading order: $1,2,3 \dots n \to n \dots 3,2,1$.<br>2. Read TRAIN backwards from position 5: $N - I - A - R - T$. | **Selection:** **NIART**<br><br>✓ **Check:** Reversing $NIART$ returns $TRAIN$. No alphabetical shifts occur. |
| **B2**<br>`Opposite Letter Mapping` | `CAT → XZG`<br>`DOG → WLT`<br>Encode **HEN** | 1. Check pair sums: $C(3)+X(24)=27$, $A(1)+Z(26)=27$, $T(20)+G(7)=27$.<br>2. Confirm DOG: $D(4)+W(23)=27$, $O(15)+L(12)=27$, $G(7)+T(20)=27$.<br>3. Apply to HEN: $H \leftrightarrow S$, $E \leftrightarrow V$, $N \leftrightarrow M$. | **Selection:** **SVM**<br><br>✓ **Invariant:** Letter order is preserved; each character is replaced by its $27-p$ complement. |
| **B3**<br>`Adjacent Pair Swapping` | Rule: Swap $(1, 2)$, $(3, 4)$, $(5, 6)$.<br>`ABCD → BADC`<br>`WXYZ → XWZY`<br>Encode **MARKET** | 1. Partition into 2-letter blocks: $MA \mid RK \mid ET$.<br>2. Invert each internal pair: $MA \to AM$, $RK \to KR$, $ET \to TE$.<br>3. Rejoin in block sequence: $AMKRTE$. | **Selection:** **AMKRTE**<br><br>✓ **Trap Check:** Full reversal would yield $TEKRAM$, which completely scrambles block boundaries. |
| **B4**<br>`Odd-Even Positional Partition` | Rule: Write odd positions $(1, 3, 5)$, then even $(2, 4, 6)$.<br>Encode **ORANGE** | 1. Index letters: $O_1 R_2 A_3 N_4 G_5 E_6$.<br>2. Extract odd-indexed letters: $O, A, G \implies OAG$.<br>3. Extract even-indexed letters: $R, N, E \implies RNE$.<br>4. Concatenate groups: $OAG + RNE = OAGRNE$. | **Selection:** **OAGRNE**<br><br>✓ **Index Discipline:** "Odd" refers strictly to string position, not alphabet values. |
| **B5**<br>`Discriminating Endpoint vs. Full Reversal` | `CAT → TAC`<br>`PLANT → TLANP`<br>Encode **STONE** | 1. $CAT \to TAC$ could be full reversal or endpoint swap.<br>2. $PLANT \to TLANP$ leaves internal letters $LAN$ untouched while exchanging $P \leftrightarrow T$. Rule is strictly **Endpoint Swap**.<br>3. Apply to STONE: Swap $S \leftrightarrow E$, keep $TON$ fixed $\implies E + TON + S$. | **Selection:** **ETONS**<br><br>✓ **Trap Check:** Full reversal yields $ENOTS$, which directly contradicts the $PLANT$ evidence. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **B2:** எதிர் எழுத்துகளை எழுதும்போது எழுத்து வரிசையை மாற்றக்கூடாது ($HEN \to SVM$).
> - **B5:** PLANT $\to$ TLANP என்பதில் நடுவில் உள்ள LAN மாறவில்லை; முதல் மற்றும் கடைசி எழுத்துகள் மட்டுமே மாறியுள்ளன. எனவே STONE $\to$ ETONS.

---

## 6. 🔢 Numerical Codes & Positional Arithmetic (Pillar 3)

### 6.1 Array Concatenation vs. Arithmetic Summation

When transforming words into numbers, clearly distinguish **positional arrays** from **aggregated totals**:

```text
Target Word: C A T (C=3, A=1, T=20)
             │ │ │
             ├─ Positional Array (Separated):   3-1-20
             ├─ Unseparated Concatenation:      3120   (Ambiguous segmentation)
             ├─ Aggregate Sum of Ranks:         3 + 1 + 20 = 24
             ├─ Aggregate Product of Ranks:     3 × 1 × 20 = 60
             └─ Reverse Positional Array:       24-26-7 (27-p values)
```

---

### 6.2 Five Worked Analytical Models (N1–N5)

| Model ID | Input Examples & Target | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **N1**<br>`Forward Position Array` | Rule: $A=1 \dots Z=26$, separated by hyphens.<br>Encode **CAB** | 1. Identify forward ranks: $C=3$, $A=1$, $B=2$.<br>2. Concatenate with hyphens: $3-1-2$. | **Selection:** **3-1-2**<br><br>✓ **Format Check:** Hyphens are delimiter tokens, not subtraction signs. Do not sum ($3+1+2=6$). |
| **N2**<br>`Reverse Position Array` | Rule: Reverse alphabet ranks ($A=26 \dots Z=1$).<br>Encode **BAD** | 1. Compute reverse ranks ($27-p$): $B = 27-2 = 25$; $A = 27-1 = 26$; $D = 27-4 = 23$.<br>2. Join preserving word order: $25-26-23$. | **Selection:** **25-26-23**<br><br>✓ **Order Check:** Original string order is preserved; only the coordinate scale is inverted. |
| **N3**<br>`Whole-Word Positional Sum` | `CAT → 24`<br>`DOG → 26`<br>Encode **HEN** | 1. Check CAT: $3 + 1 + 20 = 24$ (Matches).<br>2. Check DOG: $4 + 15 + 7 = 26$ (Matches).<br>3. Compute HEN: $H(8) + E(5) + N(14) = 8 + 5 + 14 = 27$. | **Selection:** **27**<br><br>✓ **Check:** Output is an aggregate scalar integer, not a positional string ($8514$). |
| **N4**<br>`Mixed Arithmetic Operation` | Rule: Output $= (p_1 \times p_2) + p_3$.<br>`PEN → 94`<br>`CAR → 21`<br>Encode **HAT** | 1. Check PEN: $(16 \times 5) + 14 = 80 + 14 = 94$ (Valid).<br>2. Check CAR: $(3 \times 1) + 18 = 3 + 18 = 21$ (Valid).<br>3. Apply to HAT: $H=8, A=1, T=20 \implies (8 \times 1) + 20 = 8 + 20 = 28$. | **Selection:** **28**<br><br>✓ **Precedence Trap:** $(8 + 1) \times 20 = 180$ incorrectly adds before multiplying. |
| **N5**<br>`Word Property vs. Letter Ranks` | `DOG → 27`<br>`CAT → 27`<br>`BOOK → 64`<br>Encode **FIVE** | 1. Test letter sums: $DOG=26$, $CAT=24 \implies$ Positional sum fails!<br>2. Test word length ($n$): $DOG$ has $3$ letters $\implies 3^3 = 27$. $CAT$ has $3$ letters $\implies 3^3 = 27$. $BOOK$ has $4$ letters $\implies 4^3 = 64$. Rule: $\text{Length}^3$.<br>3. Word $FIVE$ has $4$ letters $\implies 4^3 = 64$. | **Selection:** **64**<br><br>✓ **Semantic Trap:** The numerical meaning of the word "FIVE" is completely irrelevant; only its character count ($4$) determines the output. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **N3:** CAT $\to$ $3+1+20 = 24$. எழுத்துகளின் இடமதிப்பைக் கூட்ட வேண்டும்.
> - **N5:** DOG ($3$ எழுத்துகள்) $\to 3^3 = 27$; BOOK ($4$ எழுத்துகள்) $\to 4^3 = 64$. சொல்லின் பொருள் முக்கியமல்ல, அதில் உள்ள எழுத்துகளின் எண்ணிக்கையே ($n^3$) விதி.

---

## 7. 🗣️ Fictitious Languages & Sentence Substitution (Pillar 4)

### 7.1 Matrix Intersection & Elimination Protocol

In fictitious language puzzles, each word corresponds to exactly one token. However, **token order is intentionally shuffled**:

```text
Statement 1:  red ball   ──►  ka mi
Statement 2:  red flower ──►  ka tu
              ────────        ─────
Intersection:   red      ──►   ka     ==> red = ka, ball = mi, flower = tu
```

> [!IMPORTANT]
> Never assume 1-to-1 sequential alignment (e.g., assuming 1st word = 1st token). Always establish matches via pairwise sentence intersections.

---

### 7.2 Five Worked Analytical Models (W1–W5)

| Model ID | Given Language Statements | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **W1**<br>`Single Common Word Intersection` | `red ball → ka mi`<br>`red flower → ka tu`<br>Find code for **red** | 1. Compare statements: The only shared word is **red**.<br>2. Compare code groups: The only shared token is **ka**.<br>3. Direct deduction: $\text{red} = ka$. | **Selection:** **ka**<br><br>✓ **Residuals:** By elimination, $\text{ball} = mi$ and $\text{flower} = tu$. |
| **W2**<br>`Three-Statement Elimination Chain` | (1) `we like tea → pa ko mi`<br>(2) `they like coffee → nu ko sa`<br>(3) `we drink coffee → sa pa re`<br>Find code for **drink** | 1. Intersect (1) & (2): Shared word = $\text{like}$; shared token = $ko \implies \text{like} = ko$.<br>2. Intersect (1) & (3): Shared word = $\text{we}$; shared token = $pa \implies \text{we} = pa$.<br>3. Intersect (2) & (3): Shared word = $\text{coffee}$; shared token = $sa \implies \text{coffee} = sa$.<br>4. In Statement (3), remaining word is **drink**; remaining token is **re**. | **Selection:** **re**<br><br>✓ **Full Mapping:** $\text{we}=pa, \text{like}=ko, \text{tea}=mi, \text{they}=nu, \text{coffee}=sa, \text{drink}=re$. |
| **W3**<br>`Irreducible Pair Ambiguity` | `red big ball → ka mi tu`<br>`red small box → ka sa lo`<br>Find code for **ball** | 1. Shared word = $\text{red}$; shared token = $ka \implies \text{red} = ka$.<br>2. Statement 1 leaves words $\{\text{big}, \text{ball}\}$ paired with tokens $\{mi, tu\}$.<br>3. No third statement exists to break the tie. | **Selection:** **Either mi or tu (Cannot determine uniquely)**<br><br>✓ **Trap Check:** Never match $\text{ball} = tu$ merely because both appear in the final position! |
| **W4**<br>`Partial Disambiguation` | (1) `sun is bright → na po ki`<br>(2) `moon is bright → ru ki po`<br>(3) `sun looks round → na se ta`<br>Find code for **sun** | 1. Intersect (1) & (3): Shared word = $\text{sun}$; shared token = $na \implies \text{sun} = na$.<br>2. Intersect (1) & (2): Shared words = $\{\text{is}, \text{bright}\}$; shared tokens = $\{po, ki\}$.<br>3. We can conclusively solve $\text{sun} = na$ even though $\text{is}$ and $\text{bright}$ remain tied between $po$ and $ki$. | **Selection:** **sun = na**<br><br>✓ **Insight:** You do not need to decipher every word in a language to solve the target query. |
| **W5**<br>`Contradiction & Inconsistency Detection` | Premise: 1-to-1 fixed tokens.<br>`red → ka`, `blue → mi`<br>`red blue → ka tu` | 1. Statements 1 and 2 establish $\text{red} = ka$ and $\text{blue} = mi$.<br>2. The composite phrase $\text{red blue}$ must contain tokens $ka$ and $mi$.<br>3. Statement 3 substitutes $tu$ for $mi$, violating the fixed mapping premise. | **Selection:** **Inconsistent / Contradictory Data**<br><br>✓ **Exam Awareness:** If data contradicts explicit premises, identify the structural flaw. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **W2:** இரண்டு வாக்கியங்களை ஒப்பிட்டு பொதுவான சொற்களை ஒவ்வொன்றாக நீக்கினால், மீதமுள்ள சொல்லுக்கான குறியீடு எளிதில் கிடைக்கும்.
> - **W3:** இரண்டு சொற்கள் மற்றும் இரண்டு குறியீடுகள் மீந்து, வேறு எந்த வாக்கியமும் இல்லை என்றால், "mi அல்லது tu" என்றே கூற வேண்டும்; வரிசையை வைத்து சுயமாக முடிவு செய்யக்கூடாது.

---

## 8. 🏷️ Renaming Ciphers: "X is called Y" (Pillar 5)

### 8.1 The One-Way Outgoing Arrow Principle

Statements of the form *"A is called B, B is called C, C is called D"* represent **directed 1-step outgoing mappings**:

$$\text{Real Object } (A) \stackrel{\text{Renamed To}}{\longrightarrow} \text{Code Name } (B)$$

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ONE-WAY RENAMING EXECUTION ALGORITHM                     │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
  [STEP 1: Identify Factual Reality] ──┼── Determine the real-world object (e.g., "What do we write with?").
  [STEP 2: State Ordinary Answer] ─────┼── Ordinary answer = PEN.
  [STEP 3: Follow ONE Outgoing Arrow] ─┼── Find "pen is called book" ──► Code Name = BOOK.
  [STEP 4: STOP IMMEDIATELY] ──────────┼── DO NOT follow book ──► cup! Only 1 hop is permitted!
```

> [!CAUTION]
> **The Chaining Trap:**
> Never continue following the arrows down the chain ($A \to B \to C \to D$) unless the question explicitly asks for multiple iterations. A standard question terminates after exactly **one outgoing hop**.

<!-- separate learning boxes -->

> **தமிழில்:** "பேனா புத்தகம் எனப்படுகிறது; புத்தகம் கோப்பை எனப்படுகிறது" என்றால்:
> 1. எழுதப் பயன்படுவது எது? உண்மைப் பொருள் = பேனா.
> 2. பேனா என்னவென்று அழைக்கப்படுகிறது? புதிய பெயர் = புத்தகம்.
> 3. இத்துடன் நிறுத்த வேண்டும்; புத்தகத்திலிருந்து கோப்பைக்குத் தாவக்கூடாது!

---

### 8.2 Five Worked Analytical Models (R1–R5)

| Model ID | Renaming Rules & Target Question | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **R1**<br>`Standard Forward Renaming` | `pen → book`<br>`book → cup`<br>`cup → chair`<br>What is used for writing called? | 1. Identify real object: In the physical world, writing is done with a **pen**.<br>2. Find outgoing arrow for pen: $pen \to book$.<br>3. The assigned code name is book. | **Selection:** **book**<br><br>✓ **Stop Rule:** Do not chain to $cup$ or $chair$. Stop after 1 hop. |
| **R2**<br>`Real-World Colour Property` | Premise: Grass is green.<br>`green → blue`<br>`blue → red`<br>`red → yellow`<br>What is the colour of grass called? | 1. Factual colour of grass = **green**.<br>2. Find outgoing arrow for green: $green \to blue$.<br>3. Report code name: blue. | **Selection:** **blue**<br><br>✓ **Check:** The physical colour of grass is green; in this code, green is called blue. |
| **R3**<br>`Backward Decoding Query` | `pen → book`<br>`book → cup`<br>`cup → chair`<br>Which **real object** is called **cup**? | 1. The query asks for the **input** that maps to the code name cup.<br>2. Trace the arrow entering cup backwards: $book \to cup$.<br>3. The original real object is book. | **Selection:** **book**<br><br>✓ **Direction Check:** Answering $chair$ follows cup's outgoing arrow, committing a forward-encoding error on a decoding query. |
| **R4**<br>`Compound Phrase Renaming` | `cat → dog`<br>`dog → bird`<br>`bird → fish`<br>Rename: **cat and bird** (Keep "and" fixed). | 1. Map 1st noun: $cat \to dog$.<br>2. Retain connector: $and \to and$.<br>3. Map 2nd noun: $bird \to fish$.<br>4. Assemble renamed phrase: $dog \text{ and } fish$. | **Selection:** **dog and fish**<br><br>✓ **Independence:** Transform each constituent noun independently by exactly 1 hop. |
| **R5**<br>`Explicit Multi-Round Chaining` | `pen → book`<br>`book → cup`<br>`cup → chair`<br>What is pen called after **two rounds**? | 1. Round 1: $pen \to book$.<br>2. Round 2: $book \to cup$.<br>3. Terminate after the explicitly requested 2 rounds. | **Selection:** **cup**<br><br>✓ **Instruction Override:** Multi-round chaining is permitted ONLY when explicitly specified by the problem. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **R1:** எழுதப் பயன்படும் பொருள் பேனா $\to$ பேனா 'புத்தகம்' எனப்படுகிறது $\to$ விடை: **புத்தகம்**.
> - **R3:** 'கோப்பை' என்று அழைக்கப்படும் உண்மைப் பொருள் எது? பின்னோக்கிப் பார்க்க வேண்டும்: புத்தகம் $\to$ கோப்பை $\implies$ உண்மைப் பொருள்: **புத்தகம்**.

---

## 9. 🔣 Coding Tables, Symbols & Conditional Rules (Pillar 6)

### 9.1 Table Lookup vs. Alphabet Arithmetic

- In a coding table, mappings are **arbitrary lookups**: If $A \to 7$, you must use $7$, not alphabet rank $1$.
- **Case-Sensitivity:** Unless stated otherwise, uppercase ($A$) and lowercase ($a$) represent distinct characters with separate codes.
- **Conditional Overrides:** Apply standard lookup first, then test conditions on the **original input string**.

---

### 9.2 Five Worked Analytical Models (T1–T5)

| Model ID | Lookup Table & Conditions | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **T1**<br>`Direct Symbol Lookup` | Table: $A \to @$, $B \to \#$, $C \to 7$, $D \to \%$.<br>Encode **BAD** | 1. Match each character: $B = \#$, $A = @$, $D = \%$.<br>2. Concatenate in original sequence: $\#@\%$. | **Selection:** **#@%**<br><br>✓ **Rule:** Arbitrary table symbols override standard alphabet values. |
| **T2**<br>`Collision & Non-Invertible Mapping` | Table: $A \to 7$, $B \to 7$, $C \to 9$.<br>Which single letter produced **7**? | 1. Both $A$ and $B$ map to the identical output $7$.<br>2. Without auxiliary information, the mapping is non-invertible. | **Selection:** **A or B (Cannot determine uniquely)**<br><br>✓ **Insight:** Demonstrates a many-to-one lossy mapping collision. |
| **T3**<br>`Case-Sensitive Matching` | Table: $A \to 7$, $a \to 2$, $B \to \#$, $b \to @$.<br>Encode **AbBa** | 1. Parse each character: Capital $A \to 7$; small $b \to @$; Capital $B \to \#$; small $a \to 2$.<br>2. Concatenate preserving exact case: $7@\#2$. | **Selection:** **7@#2**<br><br>✓ **Case Trap:** Converting all letters to uppercase yields $7\#\#7$, completely ruining the code. |
| **T4**<br>`Endpoint Conditional Override` | Table: $1 \to A, 2 \to B, 3 \to C, 4 \to D, 5 \to E$.<br>**Condition:** If 1st and last digits are both odd, swap their codes.<br>Encode **12345** | 1. Standard lookup for 12345: $ABCDE$.<br>2. Inspect original endpoints: First digit = $1$ (Odd), Last digit = $5$ (Odd). Condition is met!<br>3. Swap endpoint codes: Exchange $A \leftrightarrow E$. Interior $BCD$ stays fixed $\implies EBCDA$. | **Selection:** **EBCDA**<br><br>✓ **Domain Check:** Parity condition is evaluated on the input digits ($1, 5$), not on the letters $A, E$. |
| **T5**<br>`Conflicting Conditions Without Priority` | Table: $A \to 1, B \to 2$. Input: **AB**.<br>Cond X: Starts with A $\to$ replace 1st code by $\#$.<br>Cond Y: Ends with B $\to$ replace 1st code by $@$. | 1. Normal code = $12$.<br>2. Both conditions apply to the identical 1st slot, demanding $\#2$ vs. $@2$.<br>3. No tie-breaking precedence is provided in the problem. | **Selection:** **Not Uniquely Determined (#2 or @2)**<br><br>✓ **Rule:** Do not invent an unstated "Condition Y beats X" rule; identify the ambiguity. |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **T3:** பெரிய எழுத்து (Capital) மற்றும் சிறிய எழுத்து (Small) ஆகியவற்றுக்கு தனித்தனி குறியீடுகள் இருக்கும்போது கவனமாகப் பிரதியிட வேண்டும் ($A \to 7$, $a \to 2$).
> - **T4:** நிபந்தனையை உள்ளீட்டின் எண்களுக்குச் (1 மற்றும் 5 ஒற்றைப்படை) சோதித்துவிட்டு, வெளியீட்டின் குறியீடுகளை ($A \leftrightarrow E$) இடமாற்றம் செய்ய வேண்டும்.

---

## 10. 🪜 Multi-Step Codes & Backward Inversion (Pillar 7)

### 10.1 The Reverse BODMAS Inversion Principle

When encoding involves multiple sequential stages:

$$\text{Plaintext} \xrightarrow{\text{Stage 1}} \text{Intermediate State} \xrightarrow{\text{Stage 2}} \text{Final Ciphertext}$$

To decode back to Plaintext, execute inverse operations in **exact reverse chronological order**:

$$\text{Final Ciphertext} \xrightarrow{\text{Undo Stage 2}} \text{Intermediate State} \xrightarrow{\text{Undo Stage 1}} \text{Plaintext}$$

---

### 10.2 Five Worked Analytical Models (M1–M5)

| Model ID | Transformation Pipeline | Step-by-Step Analytical Derivation | Verified Result & Trap Avoidance |
| :--- | :--- | :--- | :--- |
| **M1**<br>`Reverse then Shift Forward` | Pipeline: Reverse string $\to$ Shift each letter $+1$.<br>Encode **CAT** | 1. Stage 1 (Reverse): $CAT \to TAC$.<br>2. Stage 2 (Shift $+1$): $T+1=U$, $A+1=B$, $C+1=D \implies UBD$. | **Selection:** **UBD**<br><br>✓ **Check:** Decode: $UBD \xrightarrow{-1} TAC \xrightarrow{\text{Rev}} CAT$. |
| **M2**<br>`Decoding a 2-Stage Pipeline` | Rule: Reverse string $\to$ Shift $+1$.<br>Decode **FMCBU** | 1. Stage 1 (Undo $+1$ shift): $F-1=E, M-1=L, C-1=B, B-1=A, U-1=T \implies ELBAT$.<br>2. Stage 2 (Undo reversal): Reverse $ELBAT \implies TABLE$. | **Selection:** **TABLE**<br><br>✓ **Precedence:** Undo shift first, then reverse. Reversing first ($UBCMF \to \dots$) fails completely. |
| **M3**<br>`Reverse then Positional Variable Shift` | Pipeline: Reverse string $\to$ Shift new positions by $+1, +2, +3$.<br>Encode **DOG** | 1. Stage 1 (Reverse): $DOG \to GOD$.<br>2. Stage 2 (Positional shifts on $G_1 O_2 D_3$):<br>   - Pos 1: $G(7) + 1 = H(8)$<br>   - Pos 2: $O(15) + 2 = Q(17)$<br>   - Pos 3: $D(4) + 3 = G(7)$<br>3. Assemble: $HQG$. | **Selection:** **HQG**<br><br>✓ **Order Dependency:** Shifting before reversing yields $DOG \to EQJ \to JQE$, an entirely different cipher! |
| **M4**<br>`Opposites then Forward Ranks` | Pipeline: Replace by opposites $\to$ Write forward ranks.<br>Encode **BAD** | 1. Stage 1 (Opposite letters): $B \to Y, A \to Z, D \to W \implies YZW$.<br>2. Stage 2 (Forward ranks of new letters): $Y=25, Z=26, W=23$.<br>3. Output: $25-26-23$. | **Selection:** **25-26-23**<br><br>✓ **Mathematical Identity:** The forward rank of an opposite letter identically equals the reverse rank of the original letter ($27-p$). |
| **M5**<br>`Decoding Odd-Even Partition` | Rule: Odd positions first, then even positions.<br>Decode 5-letter code **PAELN** | 1. A 5-letter word has 3 odd positions $(1, 3, 5)$ and 2 even positions $(2, 4)$.<br>2. Split cipher at index 3: $PAE \mid LN$.<br>3. Interleave into slots: Slot 1=$P$, Slot 2=$L$, Slot 3=$A$, Slot 4=$N$, Slot 5=$E$. | **Selection:** **PLANE**<br><br>✓ **Verification:** $PLANE \implies \text{Odd } (P,A,E) + \text{Even } (L,N) = PAELN$ (Confirmed). |

<!-- separate learning boxes -->

> **தமிழில்:**
> - **M2:** இரண்டு படிகளில் உருவான குறியீட்டை மீட்கும்போது (Decode), கடைசியாகச் செய்த செயலை முதலில் மாற்ற வேண்டும்:
>   - குறியீடாக்கம்: திருப்புதல் $\to$ $+1$ நகர்வு
>   - மீட்டல்: $-1$ நகர்வு $\to$ திருப்புதல்

---

## 11. 📚 Verified Examination Benchmarks (Dated PYQs)

The following questions represent verified publisher-reported questions from actual Staff Selection Commission (SSC) and Railway Recruitment Board (RRB) examinations:

### 11.1 SSC CGL Tier-I — 23 September 2024, Shift 3

In a certain code language:
- `cat, dog, monkey` is coded as `55, 66, 88`
- `camel, cat, donkey` is coded as `66, 99, 33`
- `dog, goat, tiger` is coded as `88, 11, 22`

Find the code for **monkey** under this language convention.

#### Analytical Derivation:
1. **Compare Statements 1 and 2:**
   - Shared word: **cat**
   - Shared numerical token: **66**
   - Invariant: $\text{cat} = 66$.
2. **Compare Statements 1 and 3:**
   - Shared word: **dog**
   - Shared numerical token: **88**
   - Invariant: $\text{dog} = 88$.
3. **Isolate Residuals in Statement 1:**
   - Words: $\{\text{cat}, \text{dog}, \text{monkey}\} = \{66, 88, 55\}$.
   - Since $\text{cat}=66$ and $\text{dog}=88$, the remaining word **monkey** must be **55**.

**Official Selection:** **55**  
*Insight:* Match shared words pairwise and eliminate verified tokens; never assume sequential alignment. [Testbook CGL Attribution](https://testbook.com/question-answer/in-a-certain-code-language-cat-dog-monkey3--6716044163649274f7bc0f04).

---

### 11.2 RRB NTPC CBT-I — 13 January 2021, Shift 2

In a certain code language, $R$ is written as $9$, $C$ is written as $24$, and $E$ is written as $22$. How will **RECITE** be written in that code language?

#### Analytical Derivation:
1. **Analyze Given Test Values:**
   - $R$: Forward rank $= 18 \implies$ Reverse rank $= 27 - 18 = 9$ (Matches!).
   - $C$: Forward rank $= 3 \implies$ Reverse rank $= 27 - 3 = 24$ (Matches!).
   - $E$: Forward rank $= 5 \implies$ Reverse rank $= 27 - 5 = 22$ (Matches!).
2. **Invariant Rule:** Every letter is replaced by its **reverse alphabetical position ($27 - p$)**.
3. **Apply to RECITE ($R_1 E_2 C_3 I_4 T_5 E_6$):**
   - $R \implies 27 - 18 = 9$
   - $E \implies 27 - 5 = 22$
   - $C \implies 27 - 3 = 24$
   - $I \implies 27 - 9 = 18$
   - $T \implies 27 - 20 = 7$
   - $E \implies 27 - 5 = 22$
4. **Assemble Output String:** $9 \mid 22 \mid 24 \mid 18 \mid 7 \mid 22 \implies \mathbf{9222418722}$.

**Official Selection:** **9222418722**  
*Insight:* Calculate each character with internal dividers first, then concatenate into the required continuous numerical string. [Testbook NTPC Attribution](https://testbook.com/question-answer/in-a-certain-code-language-r-is-written-as-9-c-i--61cc4297f13ec11e33d81667).

<!-- separate learning boxes -->

> **தமிழில்:**
> - **11.1 (CGL 2024):** வாக்கியங்களை ஒப்பிட்டு cat=66 மற்றும் dog=88 என நீக்கிய பின், monkey=55 என எளிதில் பெறலாம்.
> - **11.2 (RRB 2021):** அனைத்து எழுத்துகளும் $27-p$ என்ற எதிர்திசை இடமதிப்பால் மாற்றப்பட்டுள்ளன ($R=9, E=22, C=24, I=18, T=7, E=22$).

---

## 12. 📝 Independent Practice Challenges

Attempt these 15 questions independently without looking at the solutions. Record your time and rule for each question. Complete solutions and error audits are provided in Section 13.

### Set A: 10 Core Foundation Questions (Untimed Diagnostic)

- **Q1.** Given `CAT → DBU` and `DOG → EPH`, encode **PIG** under the same constant shift.
- **Q2.** An encoding cipher shifts every letter by $+2$. Decode **JGNNQ**.
- **Q3.** In a cyclic alphabet, shift each letter of **ZEBRA** forward by two places ($+2$).
- **Q4.** Perform a full string reversal on the word **GARDEN**.
- **Q5.** Replace every letter of **MAP** with its opposite alphabet letter ($27-p$), keeping original order.
- **Q6.** Code the word **BIRD** by the sum of its forward alphabet positions.
- **Q7.** Write the reverse alphabet positions ($27-p$) of **ACE**, separated by hyphens.
- **Q8.** Fixed one-to-one word code with shuffled tokens: `blue car → mi ka`; `blue bus → mi tu`. What codes **bus**?
- **Q9.** In a 1-round renaming cipher: `pen → chair`, `chair → book`. What is the real-world writing object called?
- **Q10.** Case-sensitive table: $A \to 4, a \to 9, B \to \#, b \to \%$. Encode **bAaB**.

---

### Set B: 5 Advanced Application & Evidence Challenges

- **Q11.** Reverse the word **PEN**, then shift its letters in their **new positions** by $+1, +2, +3$. Find the resulting code.
- **Q12.** A 6-letter word was encoded by writing odd-position letters first, then even-position letters. Decode **OAGRNE**.
- **Q13.** Fixed one-to-one word code with shuffled tokens:
  - `we read books → ka mi tu`
  - `they read papers → no mi sa`
  - `we buy papers → sa ka re`  
  Find the code for **buy**.
- **Q14.** Table: $1 \to A, 2 \to B, 3 \to C, 4 \to D, 5 \to E$. If both input endpoints are odd digits, swap their normal codes; otherwise leave the table unchanged. Encode **34521**.
- **Q15.** Fixed one-to-one word code: `red big ball → ka mi tu`; `red small box → ka sa lo`. Can you uniquely determine the code for **big**? Explain mathematically.

---

## 13. ✅ Complete Solutions, Step-by-Step Derivations & Trap Audits

| Q# | Selection | Step-by-Step Mathematical Derivation | Verification Check & Trap Audit |
| :---: | :---: | :--- | :--- |
| **Q1** | **QJH** | Constant shift $+1$: $P(16)+1=Q, I(9)+1=J, G(7)+1=H$. | ✓ Invert: $QJH \xrightarrow{-1} PIG$. |
| **Q2** | **HELLO** | Reverse $+2$ shift with $-2$: $J-2=H, G-2=E, N-2=L, N-2=L, Q-2=O$. | ✓ Direction check: do not add $+2$ ($LINPQ$). |
| **Q3** | **BGDTC** | Cyclic $+2$ shift: $Z(26)+2 = B(2)$ (Modular wrap); $E+2=G, B+2=D, R+2=T, A+2=C$. | ✓ Wrap check: $Z \to A \to B$. |
| **Q4** | **NEDRAG** | Full string reversal: Read $G-A-R-D-E-N$ from right to left $\implies N-E-D-R-A-G$. | ✓ All 6 characters retained; no shifts. |
| **Q5** | **NZK** | Opposite pairs ($27-p$): $M \leftrightarrow N, A \leftrightarrow Z, P \leftrightarrow K$. | ✓ Order preserved; do not reverse. |
| **Q6** | **33** | Forward ranks sum: $B(2) + I(9) + R(18) + D(4) = 2 + 9 + 18 + 4 = 33$. | ✓ Positional sum is 33. |
| **Q7** | **26-24-22** | Reverse ranks ($27-p$): $A = 27-1=26$; $C = 27-3=24$; $E = 27-5=22$. | ✓ Hyphens are delimiters, not minus signs. |
| **Q8** | **tu** | Shared word $\text{blue} = mi$. In statement 2, residual word $\text{bus} = tu$. | ✓ $\text{car}=ka$, $\text{bus}=tu$. |
| **Q9** | **chair** | Real writing object = $pen$. Single outgoing hop: $pen \to chair$. | ✓ Stop after 1 hop; do not chain to $book$. |
| **Q10** | **%49#** | Match exact case: $b \to \%, A \to 4, a \to 9, B \to \# \implies \%49\#$. | ✓ Case-sensitive lookup. |
| **Q11** | **OGS** | Stage 1 (Reverse): $PEN \to NEP$.<br>Stage 2 (Shifts $+1, +2, +3$ on $N_1 E_2 P_3$): $N+1=O, E+2=G, P+3=S \implies OGS$. | ✓ Reverse before shifting. |
| **Q12** | **ORANGE** | 6-letter word $\implies 3$ odd positions $(1,3,5)$ and $3$ even $(2,4,6)$.<br>Split code: $OAG \mid RNE$. Interleave: $O-R-A-N-G-E$. | ✓ Check: Odd $(O,A,G) + \text{Even } (R,N,E) = OAGRNE$. |
| **Q13** | **re** | Intersect 1 & 2: $\text{read} = mi$. Intersect 1 & 3: $\text{we} = ka$. Intersect 2 & 3: $\text{papers} = sa$.<br>In statement 3, remaining word $\text{buy} = re$. | ✓ Complete mapping verified. |
| **Q14** | **ADEBC** | Normal lookup for 34521: $CDEBA$.<br>Endpoints 3 and 1 are both odd $\implies$ Swap $C \leftrightarrow A$. Interior stays $DEB \implies ADEBC$. | ✓ Test condition on input digits (3 and 1). |
| **Q15** | **Cannot Determine Uniquely** | $\text{red} = ka$. The words $\text{big}$ and $\text{ball}$ correspond to $\{mi, tu\}$ in an unknown order. Additional data is required. | ✓ Rigorous reasoning: acknowledges ambiguity. |

> 🎯 **Score Assessment:**
> - **Set A:** Passing threshold is $\ge 7/10$ ($70\%$). Review arithmetic or wraparound slips before proceeding.
> - **Set B:** Application check ($\ge 4/5$, $80\%$). Demonstrates robust multi-step and linguistic cipher competence.

<!-- separate learning boxes -->

> **தமிழில்:** விடைகளை மட்டும் பார்க்காமல், ஒவ்வொரு வினாவிலும் பயன்படுத்தப்பட்ட வழிமுறையை (Shift, Reversal, Opposite pair, Elimination) தெளிவாக எழுதிப் பழகவும்.

---

## 14. ⚠️ Systematic Error Diagnostics & Revision Blueprint

### 14.1 Error Diagnosis & Precision Repair Table

| Common Mistake | Root Operational Cause | Precision Repair Action |
| :--- | :--- | :--- |
| **Single-Letter Generalization** | Testing only letter 1 and assuming $+1$ constant shift. | Align **all** letters; verify whether shifts follow $+1, +2, +3$ or alternating patterns. |
| **Reversal vs. Opposite Confusion** | Equating reversing a string with alphabet complements. | Keep distinct: Reversal inverts reading order ($CAT \to TAC$); Opposites replace characters ($CAT \to XZG$). |
| **Word vs. Alphabet Position Mixing** | Confusing 1st letter of word with letter $A$ ($p=1$). | Label word slots ($1, 2, 3$) above letters; write alphabet ranks ($p$) below letters. |
| **Renaming Infinite Chaining** | Following arrows continuously ($A \to B \to C \to D$). | Stop after exactly **one outgoing hop** unless multi-round iterations are explicitly commanded. |
| **Positional Assumption in Sentences** | Assuming 1st word maps to 1st token. | Disregard sentence order; find shared words pairwise across multiple statements. |
| **Ignoring Case Sensitivity** | Treating $A$ and $a$ as identical table lookups. | Inspect table header; if both lowercase and uppercase exist, match character case strictly. |
| **Forward Decoding Blunder** | Re-applying the encoding rule instead of its inverse. | To decode, invert signs: $+k \to -k$; $-k \to +k$; swap becomes swap; undo last step first. |

---

### 14.2 Compact Decision Algorithm

> 🧠 **R08 Quick-Recall Executive Card:**
> 1. **Word $\to$ Word:** Check Length $\to$ Check Reversal $\to$ Check Opposite ($27-p$) $\to$ Calculate Shift Deltas ($\Delta$).
> 2. **Word $\to$ Number:** Check Word Length ($n, n^2, n^3$) $\to$ Forward Sum $\to$ Reverse Sum ($27-p$) $\to$ Positional String.
> 3. **Sentences:** Find 2 sentences with 1 shared word $\to$ Isolate common token $\to$ Eliminate $\to$ Leave ties unresolved.
> 4. **"X is called Y":** Determine real-world factual answer $\to$ Take 1 outgoing arrow $\to$ STOP.
> 5. **Table Lookups:** Check case $\to$ Do base lookup $\to$ Apply endpoint conditions to input string.
> 6. **Multi-Step:** Write intermediate lines $\to$ Decode by undoing the last step first.

---

### 14.3 Personal Error Log Template

Maintain this structured error log during mock test revisions:

| Question ID / Source | Flawed Method & Incorrect Answer | Root Operational Cause | Correct Analytical Rule | Date of Re-Attempt |
| :--- | :--- | :--- | :--- | :---: |
| *Example: B5* | *Guessed ENOTS (Full reversal)* | *Single-example bias from CAT* | *PLANT proves endpoint swap $\implies$ ETONS* | *Day 7: Clean Pass* |
| `__` | `__` | `__` | `__` | `__` |
| `__` | `__` | `__` | `__` | `__` |

---

## 15. 📊 Module Coverage, Performance Scorecard & Next Steps

### R08 Syllabus & Exam Blueprint Coverage

| Core Exam Requirement | Detailed Chapter Coverage | Verification Status |
| :--- | :--- | :---: |
| **Letter Shifts, Reversals & Positions** | Sections 4 & 5 (L1–L5, B1–B5) + Modular Wrapping | ✅ 100% Comprehensive |
| **Numerical & Positional Arithmetic Codes** | Section 6 (N1–N5): Sums, Products, Length Powers | ✅ 100% Comprehensive |
| **Fictitious Language Sentence Elimination** | Section 7 (W1–W5): Pairwise Intersections & Ambiguities | ✅ 100% Comprehensive |
| **Renaming Logic ("X is called Y")** | Section 8 (R1–R5): 1-Hop Outgoing Arrows & Reverse Decoding | ✅ 100% Comprehensive |
| **Symbol Tables & Conditional Overrides** | Section 9 (T1–T5): Case-Sensitivity & Endpoint Parity | ✅ 100% Comprehensive |
| **Multi-Step Pipelines & Inverse Decoding** | Section 10 (M1–M5): Reverse BODMAS Deconstruction | ✅ 100% Comprehensive |
| **Dated Official Exam Benchmarks** | Section 11: SSC CGL 2024 Shift 3 & RRB NTPC 2021 Shift 2 PYQs | ✅ Verified & Recalculated |

---

### Your Progress Record — Fill After Mock Drills

| Verification Milestone | Target Criteria | Actual Student Record | Status |
| :--- | :---: | :---: | :---: |
| **Alphabet & Opposite Recall** | Instant recall of 13 pairs ($27-p$) | Time: `__s` | `Pending` |
| **Set A Diagnostic (10 Qs)** | $\ge 7/10$ ($70\%$) Untimed | Score: `__/10` | `Pending` |
| **Set B Application (5 Qs)** | $\ge 4/5$ ($80\%$) Untimed | Score: `__/5` | `Pending` |
| **Timed Mock Benchmark** | $\ge 80\%$ accuracy @ $\le 30\text{ sec/q}$ | Accuracy: `__%` \| Time: `__s` | `Pending` |
| **Day 7 Retention Review** | 100% Clean re-solve of logged errors | Date: `__` | `Pending` |
| **Day 21 Retention Review** | 100% Clean re-solve of logged errors | Date: `__` | `Pending` |

---

### Master Plan Transition

- **Previous Completed Modules:** [RF1 — Letters & Numbers](00-RF1-Letters-and-Numbers.md), [RF2 — Instructions & Relationships](00-RF2-Instructions-and-Relationships.md), [R01 — Analogy](01-R01-Analogy.md), [R04 — Classification](02-R04-Classification.md), [R07 — Series](03-R07-Series.md), [R12 — Finding Missing Number](04-R12-Finding-the-Missing-Number.md).
- **Current Completed Module:** **R08 — Coding-Decoding**
- **Next in the Reasoning Roadmap:** **R09 — Word Formation** (Letter availability pools, prefix/suffix additions, unrepeatable letter constraints, and anagram reconstruction).

```text
[R12 — Finding Missing Number] ──► [R08 — Coding-Decoding] ──► [R09 — Word Formation]
          (Completed)                    (Current)                     (Next)
```

**R08 — Coding-Decoding | Updated: 6 November 2026 | 35 Worked Analytical Models + 15 Independent Practice Challenges + 2 Verified SSC/RRB PYQs | Progress: Ready for Diagnostic Evaluation**
