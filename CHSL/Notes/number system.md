# SSC CHSL 2026 — QUANTITATIVE APTITUDE PERSONAL NOTES

> **Section:** Quantitative Aptitude — Number Systems  
> **Tier-I:** 25 questions | 50 marks | 15 minutes sectional timer  
> **Target Speed:** ~36 seconds per question  
> **Purpose:** Personal reference notes — concepts, methods, traps, rules. No questions.  

---

## SECTION OVERVIEW

### 1. Topic Architecture: The 4 Pillars of Number Systems
The SSC CHSL syllabus organizes Number Systems into four logical modules:

```
                      A. NUMBER SYSTEMS
                             │
     ┌───────────────────────┼───────────────────────┬──────────────────────┐
     ▼                       ▼                       ▼                      ▼
1. Computation of        2. Decimals             3. Fractions           4. Relationship
   Whole Numbers                                                           Between Numbers
  (0, 1, 2, 3...)          (0.75, 0.333...)        (3/4, 7/9...)          (HCF, LCM, Co-primes)
```

| Pillar | Focus | What SSC Actually Tests |
|---|---|---|
| **1. Computation of Whole Numbers** | Complete non-negative numbers ($0, 1, 2, \dots$) | Place/Face value, Prime facts, Divisibility ($3, 9, 11, 72, 88$), Unit digits, Division algorithm & remainders |
| **2. Decimals** | Numbers with a decimal point ($.$) | Converting decimals to fractions, Recurring / Bar decimals ($0.\bar{3}, 0.4\bar{7}$) |
| **3. Fractions** | Parts of a whole ($\frac{a}{b}$) | Comparing fractions (cross-multiplication rule), Ascending/Descending order |
| **4. Relationship Between Numbers** | How numbers connect with each other | HCF, LCM, Co-primes, and the Golden Formula ($\text{Num}_1 \times \text{Num}_2 = \text{HCF} \times \text{LCM}$) |

---

### 2. Pillar 1 Syllabus Breakdown: The 6 Core Tools of Whole Numbers

| # | Core Area | What It Means in Plain Words | Exam Focus & What You Must Know |
|---|---|---|---|
| **1** | **Number Types & Primes** | Basic number categories and their definitions | Natural, Whole, Integers; special status of $0, 1, 2$; 25 primes between $1$ and $100$ |
| **2** | **Place Value & Face Value** | Position weight vs. actual identity of a digit | The zero-counting trick; finding differences and sums of values |
| **3** | **Divisibility Rules** | Testing division without long division | Rules for $2, 4, 8, 5, 3, 9, 11$; finding missing digits ($x$); composite rules ($72, 88$) |
| **4** | **Unit Digit Calculation** | Finding the very last digit of large expressions | Products of numbers; powers with cyclicity of 4; the "$5 \times \text{even} = 0$" rule |
| **5** | **The Division Algorithm & Remainders** | The formal structure of division | Formula: $\text{Dividend} = \text{Divisor} \times \text{Quotient} + \text{Remainder}$; chained remainder problems |
| **6** | **Sum of First $N$ Numbers** | Fast summation formulas | Sum of first $n$ natural numbers $\frac{n(n+1)}{2}$, even numbers $n(n+1)$, odd numbers $n^2$ |

---

### 3. Topic Priority Table

| Priority | Topics | Expected Questions (Tier-I) |
|---|---|---|
| 🔴 **Must Master** | Computation of Whole Numbers, Divisibility Rules, Unit Digit | 1 to 2 out of 25 |
| 🟡 **Should Cover** | Decimals, Fractions, Recurring Decimals | 1 out of 25 |
| ⚪ **Light Touch** | Relationship Between Numbers, Remainder Theorems | 0 to 1 out of 25 |

### 3. The Universal Exam Rule
* **Time limit:** Spend no more than **35–40 seconds** on any Number Systems question in Tier-I.
* **Skip rule:** If you cannot identify the exact rule (Place Value, Prime check, or Divisibility) within **15 seconds**, mark for review and skip immediately.

### 4. Decision Flowchart

```
                 Read the Question
                         │
                         ▼
       Can you spot the pattern/rule in 15 sec?
                         │
            ┌────────────┴────────────┐
            │                         │
           YES                        NO
            │                         │
            ▼                         ▼
   Apply the shortcut /        Skip immediately
   Units digit check            (Return in Round 2)
```

---

# A. NUMBER SYSTEMS

### What is Number Systems?
Number Systems is the mathematical framework for representing numbers using digits ($0$ to $9$). On the SSC exam, all problems use the base-10 decimal system, where every position to the left is 10 times larger than the one before it.

> **The Golden Rule:**  
> A digit's **face value** is its fixed identity, but its **place value** depends entirely on its position. Always solve place-value problems from right to left using powers of 10.

---

## A1. Whole Numbers: Classification, Place Value & Primes

### 1. Definition
* **Whole Numbers:** Non-negative integers ($0, 1, 2, 3, \dots$).
* **Face Value:** The actual numerical identity of the digit itself. It never changes, regardless of where the digit sits in the number.
* **Place Value (Local Value):** What the digit is actually worth based on its position in the number ($\text{Face Value} \times \text{Position Multiplier}$).
* **Prime Numbers:** Numbers greater than $1$ with exactly two factors ($1$ and itself).
* **Composite Numbers:** Numbers with more than two factors.

### 2. How to Identify in 3 Seconds
* Look for: *"difference between place value and face value"*, *"sum of place values"*, or *"which of the following is a prime number"*.

### 3. Standard Solving Method

#### For Place Value vs. Face Value:
1. **Locate the digit** in the given number.
2. **Find Face Value:** The digit itself (no calculation needed).
3. **Find Place Value:** Write down the digit, count how many numbers stand to its right, and append that many zeros.
4. **Perform the operation:** Add or subtract as requested.
5. **Fast verification:** Check the units digit of the difference to eliminate distractors instantly.

#### For Prime Number Verification:
1. If number $\le 1 \rightarrow$ not prime.
2. If number is $2 \rightarrow$ smallest and only even prime.
3. If even and $> 2 \rightarrow$ composite.
4. For odd $N$, test division by primes ($3, 5, 7, 11, \dots$) up to $\sqrt{N}$.

---

### 4. Key Rules, Formulas & Reference Tables

#### Number Classifications

| Classification | Symbol | Starting Point / Elements | Frequency |
|---|---|---|---|
| Natural Numbers | $\mathbb{N}$ | Starts at $1$ ($1, 2, 3, 4, \dots$) | 🔴 |
| Whole Numbers | $\mathbb{W}$ | Starts at $0$ ($0, 1, 2, 3, \dots$) | 🔴 |
| Integers | $\mathbb{Z}$ | Negative, zero, and positive ($\dots, -2, -1, 0, 1, 2, \dots$) | ⚪ |

---

#### 🔴 Face Value vs. Place Value Comparison Table

| Feature | Face Value | Place Value (Local Value) | Frequency |
|---|---|---|---|
| **What it means** | The actual digit itself | The value of the digit based on its position | 🔴 |
| **Depends on position?** | **No.** Never changes. | **Yes.** Changes with every position. | 🔴 |
| **Formula** | $\text{Face Value} = \text{The digit}$ | $\text{Place Value} = \text{Digit} \times \text{Position Multiplier}$ | 🔴 |
| **The Zero Trick** | Just write down the digit | Write the digit, count digits to its right, append that many zeros | 🔴 |
| **Example in $94,763$ (Digit 4)**| **$4$** | $4 \times 1,000 = \mathbf{4,000}$ (3 digits after it) | 🔴 |
| **Example in $94,763$ (Digit 7)**| **$7$** | $7 \times 100 = \mathbf{700}$ (2 digits after it) | 🔴 |

---

#### Positional Value System

| Position Name | Multiplier | Example in $58,342$ for digit $8$ | Frequency |
|---|---|---|---|
| Units (Ones) | $\times 1$ | — | 🔴 |
| Tens | $\times 10$ | — | 🔴 |
| Hundreds | $\times 100$ | — | 🔴 |
| Thousands | $\times 1,000$ | $8 \times 1,000 = 8,000$ | 🔴 |
| Ten-Thousands | $\times 10,000$ | — | 🔴 |

---

#### 🔴 The 3 Critical Exam Trap Numbers

| Number | Factors | Official Classification | Why SSC Uses It as a Trap |
|---|---|---|---|
| **$1$** | $1$ | **Neither Prime nor Composite** | A prime must have exactly **two distinct** factors. $1$ only has one. |
| **$2$** | $1, 2$ | **Prime Number** | It is the **smallest prime** and the **only even prime**. |
| **$4$** | $1, 2, 4$ | **Composite Number** | It is the **smallest composite number**. |

---

#### 🔴 Prime Count Speed-Benchmarks (Memorize for Exam)

| Range | Number of Primes | List of Primes |
|---|---|---|
| **$1$ to $50$** | **$15$ primes** | $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$ |
| **$51$ to $100$** | **$10$ primes** | $53, 59, 61, 67, 71, 73, 79, 83, 89, 97$ |
| **$1$ to $100$ (Total)**| **$25$ primes** | Complete set above |

---

### 5. Visual Diagrams

```
 Number:        9     4     7     6     3
                │     │     │     │     │
 Position:    10000  1000  100   10     1
                │     │     │     │     │
 Place Value: 90000  4000  700   60     3
 Face Value:    9     4     7     6     3
```

---

### 6. Worked Examples

#### Example 1: Place Value vs. Face Value Difference
* **Problem:** In $94,763$, find difference between place value of $4$ and face value of $7$.
* **Solution:**
  1. $\text{Place Value of } 4 = 4 \times 1,000 = 4,000$
  2. $\text{Face Value of } 7 = 7$
  3. $\text{Difference} = 4,000 - 7 = 3,993$
* **Answer:** $3,993$

#### Example 2: Sum of First Five Prime Numbers
* **Problem:** Find the sum of the first five prime numbers.
* **Solution:**
  1. Recall $1$ is not prime. Smallest prime is $2$.
  2. Primes: $2, 3, 5, 7, 11$.
  3. Sum: $(3 + 7) + (2 + 11 + 5) = 10 + 18 = 28$.
* **Answer:** $28$

---

### 7. Common SSC Traps
1. **Counting 1 as prime:** $1$ only has one factor.
2. **Skipping 2:** $2$ is an even number, but it is prime!
3. **Subtracting place value instead of face value:** In $4,000 - 7$, don't subtract $700$.

---

## A2. Divisibility Rules & Missing Digits

### 1. Definition
Divisibility rules allow you to determine whether a large number divides evenly by a divisor without carrying out full division. SSC CHSL heavily tests these rules by giving numbers with one or two missing digits ($x, y$ or $*$) and asking for the missing values.

### 2. How to Identify in 3 Seconds
* Look for: *"If the number $471x52$ is divisible by $9$, find $x$"* or *"divisible by $72$"* or *"divisible by $88$"*.

### 3. Standard Solving Method

#### For Sum of Digits ($3$ and $9$):
1. Add all known digits.
2. Add the variable: $\text{Sum} = S + x$.
3. Find the smallest multiple of the divisor $\ge S$.
4. Solve for $x$ as a single digit ($0 \le x \le 9$).
5. **Shortcut:** Use "Casting out 9s" (strike out pairs adding to $9$).

#### For Alternating Difference ($11$):
1. Number positions from right to left: $1, 2, 3, 4, \dots$
2. Sum **Team A** (odd positions: 1st, 3rd, 5th...).
3. Sum **Team B** (even positions: 2nd, 4th, 6th...).
4. Compute difference: $|\text{Team A} - \text{Team B}|$.
5. Set difference to **$0$** or **$11$** to find the single-digit $x$.

#### For Composite Numbers ($72, 88$):
1. Split into co-prime pairs:
   * $72 \rightarrow 8 \times 9$
   * $88 \rightarrow 8 \times 11$
2. Apply the rule of $8$ on the last 3 digits first to find the last missing digit.
3. Then apply the rule of $9$ or $11$ to find the remaining missing digit.

---

### 4. Key Rules & Reference Tables

#### 🔴 The 4 Master Divisibility Families

| Family | Divisors | Rule | Frequency |
|---|---|---|---|
| **Look at the End** | **$2$** <br> **$4$** <br> **$8$** <br> **$5$** <br> **$10$** | Last digit is even ($0, 2, 4, 6, 8$) <br> Last **2 digits** divide by $4$ <br> Last **3 digits** divide by $8$ <br> Last digit is $0$ or $5$ <br> Last digit is $0$ | 🔴 <br> 🔴 <br> 🔴 <br> 🔴 <br> ⚪ |
| **Sum of Digits** | **$3$** <br> **$9$** | Sum of all digits divides by $3$ <br> Sum of all digits divides by $9$ | 🔴 <br> 🔴 |
| **Alternating Teams** | **$11$** | $(\text{Sum of odd-place digits}) - (\text{Sum of even-place digits}) = 0 \text{ or multiple of } 11$ | 🔴 |
| **Composite Teams** | **$6$** <br> **$12$** <br> **$72$** <br> **$88$** | Divisible by both $2$ and $3$ <br> Divisible by both $3$ and $4$ <br> Divisible by both **$8$ and $9$** <br> Divisible by both **$8$ and $11$** | 🟡 <br> 🟡 <br> 🔴 <br> 🔴 |

#### The Rule of 7 (Chop, Double, and Subtract)
* **Rule:** Chop off the last digit, double it, and subtract from the remaining number. If the result divides by $7$, the number divides by $7$.
* **Exam reality:** For 3-digit or 4-digit numbers, mental short division is usually faster.

---

### 5. Visual Diagrams

#### The Rule of 11 Alternating Positions:

```
 Number:      7     x     5     4     6     2
 Position:   (6)   (5)   (4)   (3)   (2)   (1)
              │     │     │     │     │     │
 Teams:     TeamB TeamA TeamB TeamA TeamB TeamA
              │     │     │     │     │     │
 Team A (Odd):  2 + 4 + x = 6 + x
 Team B (Even): 6 + 5 + 7 = 18
 Difference:   18 - (6 + x) = 12 - x = 11  ==>  x = 1
```

---

### 6. Worked Examples

#### Example 1: Divisibility by 9 with Missing Digit
* **Problem:** If $471x52$ is divisible by $9$, find $x$.
* **Solution:**
  * Sum of digits: $4 + 7 + 1 + x + 5 + 2 = 19 + x$.
  * Next multiple of $9$ is $27$.
  * $19 + x = 27 \implies x = 8$.
* **Answer:** $x = 8$

#### Example 2: Divisibility by 11 with Missing Digit
* **Problem:** If $7x5462$ is divisible by $11$, find $x$.
* **Solution:**
  * Odd positions (from right): $2 + 4 + x = 6 + x$.
  * Even positions (from right): $6 + 5 + 7 = 18$.
  * Difference: $18 - (6 + x) = 12 - x$.
  * Set $12 - x = 11 \implies x = 1$.
* **Answer:** $x = 1$

---

### 7. Common SSC Traps
1. **Confusing "Odd Positions" with "Odd Digits":** The Rule of 11 cares about position ($1\text{st}, 3\text{rd}, 5\text{th}$ from right), NOT whether the digit itself is odd or even!
2. **Setting difference to 0 instead of 11:** If $12 - x = 0 \implies x = 12$, which is impossible for a single digit. Always remember the difference can also be $11$.
3. **Forgetting co-prime condition:** Splitting $12$ into $2 \times 6$ is wrong because $2$ and $6$ share a factor. Must split into co-primes: $3 \times 4$.

---

## A3. Unit Digit Computation

### 1. Definition
The unit digit is the very last digit (ones place) on the right of any number. In SSC CHSL, unit digit problems test your ability to calculate the final digit of complex products and powers without calculating the large intermediate numbers.

### 2. How to Identify in 3 Seconds
* Look for questions ending in: *"What is the unit digit of [product / powers]?"*

### 3. Standard Solving Method

#### For Products of Numbers:
1. **Extract only the last digit** of each number in the expression.
2. **Multiply sequentially:** Multiply the first two last digits.
3. **Drop the tens digit:** Keep only the units digit of that result.
4. **Multiply by the next last digit:** Continue until all factors are used.
5. **The remaining digit** is your final unit digit.

---

### 4. Key Rules & Speed Shortcuts

#### 🔴 The Golden Rules of Unit Digits

| Rule Name | What It Means | Exam Shortcut | Frequency |
|---|---|---|---|
| **Last-Digit Focus** | The unit digit of a product depends **only** on the unit digits of its factors. | Discard all tens and hundreds digits before multiplying. | 🔴 |
| **The "5 and Even" Rule** | $5 \times \text{any even digit} = \mathbf{0}$ | If a product has a factor ending in $5$ AND any factor ending in an even number ($2, 4, 6, 8$), the unit digit is **instantly $0$**. | 🔴 |
| **The "5 and Odd" Rule** | $5 \times \text{all odd digits} = \mathbf{5}$ | If a product has a factor ending in $5$ and all other factors are odd, the unit digit is **always $5$**. | 🔴 |

---

### 5. Visual Diagrams

```
 Expression:      82   ×   74   ×   67   ×   99
                   │        │        │        │
 Step 1 (Extract): 2        4        7        9
                   │        │
 Step 2 (Multiply): └───┬────┘
                        8       ×    7
                        │            │
 Step 3 (Multiply):     └─────┬──────┘
                             56  --> keep 6
                              │           │
 Step 4 (Final):              └─────┬─────┘
                                   54  --> Final Unit Digit = 4
```

---

### 6. Worked Example

#### Example: Unit Digit of a Multi-Factor Product
* **Problem:** What is the unit digit of $82 \times 74 \times 67 \times 99$?
* **Step-by-step solution:**
  1. Extract last digits: $2, 4, 7, 9$.
  2. $2 \times 4 = 8$.
  3. $8 \times 7 = 5\mathbf{6} \rightarrow$ keep only **$6$**.
  4. $6 \times 9 = 5\mathbf{4} \rightarrow$ keep only **$4$**.
* **Final Answer:** **$4$**

---

### 7. Common SSC Traps
1. **Multiplying full numbers:** Calculating $82 \times 74$ wastes precious minutes. Never calculate beyond single-digit multiplication.
2. **Missing the $5 \times \text{even}$ shortcut:** Spending 20 seconds multiplying when a $5$ and an even digit appear in the product. Spot the zero in 1 second.
3. **Carry-over errors:** Keeping the tens digit (e.g. keeping $56$ instead of reducing to $6$) creates unnecessary large numbers. Discard the tens digit immediately.

---

*End of Number Systems Personal Notes — SSC CHSL 2026*  
*Last Updated: 22 September 2026*
