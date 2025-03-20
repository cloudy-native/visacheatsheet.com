# Visa Decision Tree for schengen

```mermaid
flowchart LR
    q1["What is the primary purpose of your visit to the Schengen Area?"]
    q1 -->|Tourism/Leisure| q2
    q1 -->|Business or Conference| q3
    q1 -->|Visiting Family/Friends| q4
    q1 -->|Study/Research Short-term| q5
    q1 -->|Medical Treatment| q6
    q1 -->|Long-term Stay or Work| q7
    q1 -->|Airport Transit| q8
    q2["How long do you plan to stay in the Schengen Area?"]
    q2 -->|Up to 90 days in a 180-day period| q9
    q2 -->|More than 90 days in a 180-day period| q7
    q3["What type of business activity will you be undertaking?"]
    q3 -->|Business meetings/conferences no work| q2
    q3 -->|Paid activities/work| q7
    q3 -->|Trade fair or exhibition| q2
    q3 -->|Contract negotiation/signing| q2
    q4["Are you visiting family/friends for a short stay or for family reunification?"]
    q4 -->|Short visit up to 90 days| q2
    q4 -->|Family reunification/long-term stay| q7
    q5["How long will your study or research activity last?"]
    q5 -->|Less than 90 days| q2
    q5 -->|More than 90 days| q7
    q6["How long will your medical treatment last?"]
    q6 -->|Less than 90 days| q2
    q6 -->|More than 90 days| q7
    q7["For long-term stays over 90 days, which specific Schengen country will be your main destination?"]
    q7 -->|Germany| r10
    q7 -->|France| r10
    q7 -->|Italy| r10
    q7 -->|Spain| r10
    q7 -->|Other Schengen country| r10
    q8["Will you be leaving the international transit area of the airport?"]
    q8 -->|Yes, Ill exit the transit area| q9
    q8 -->|No, Ill stay in the transit area| q10
    q9["What is your nationality?"]
    q9 -->|EU/EEA/Switzerland citizen| r1
    q9 -->|Visa-exempt nationality e.g., USA, Canada, Japan| r2
    q9 -->|Visa-required nationality| q11
    q9 -->|Im not sure| q12
    q10["What is your nationality for airport transit purposes?"]
    q10 -->|Nationality requiring Airport Transit Visa| r9
    q10 -->|Nationality exempt from Airport Transit Visa| r8
    q10 -->|Im not sure| q13
    q11["Have you previously been issued a Schengen visa?"]
    q11 -->|Yes, and I always respected the rules| r3
    q11 -->|Yes, but I overstayed| r7
    q11 -->|No, this is my first application| r3
    q12["Select your country of citizenship to check if you need a visa:"]
    q12 -->|EU/EEA countries or Switzerland| r1
    q12 -->|USA, Canada, Japan, South Korea, Australia, New Zealand, etc.| r2
    q12 -->|Most other countries e.g., India, China, Russia, etc.| r3
    q13["Select your country of citizenship to check if you need an Airport Transit Visa:"]
    q13 -->|Afghanistan, Bangladesh, Eritrea, Ethiopia, Ghana,... Iraq, Nigeria, Pakistan, Somalia, Sri Lanka, etc.| r9
    q13 -->|Any other country| r8
    r1(["No Visa Required - EU/EEA/Swiss Citizens"])
    r2(["No Visa Required - Visa-Exempt Nationalities"])
    r3(["Schengen Visa Type C - Short Stay"])
    r4(["Schengen Visa - Multiple Entry"])
    r5(["Schengen Visa - Limited Territorial Validity"])
    r6(["Schengen Visa with Extended Validity 1-5 years"])
    r7(["Previous Overstay - Special Application"])
    r8(["No Airport Transit Visa Required"])
    r9(["Airport Transit Visa ATV"])
    r10(["National Visa Type D - Long Stay"])
```
