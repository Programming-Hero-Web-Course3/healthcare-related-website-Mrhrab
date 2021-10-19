import React from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';

const Specials = () => {
    return (
<div id="specials">
            <Container>
               <h1>When the Hospital Is Cheaper Without Insurance</h1> 
               <p>Could it be? A local company has evidence that health insurance discounts with hospitals aren’t as valuable as insurance companies would like consumers to believe. CEO Richard Stephenson and REDU Health have found that the hospital’s cash discount rates are often less than what one would pay through their insurance. 

When patients have to head to the hospital and need to pay the bill, most have no idea how much the services cost. If they understand the process (many don’t), they know they must meet their deductible and then pay some percentage of the remaining costs via coinsurance. Many don’t know that hospitals often have their own discounted rate if the patient offers to pay cash for the treatment or procedure. Dallas-based REDU Health is a national database of prices for emergency services and provides transparency to the healthcare space, hoping to bring these rates to light. Employers and consumers who pay for healthcare can benefit from this transparency, and could find savings along the way. 

Here is how it works: Traditional hospitals have standard charges for procedures, but those prices are almost never paid by patients, employers, or insurance companies. Insurance companies negotiate with the hospitals to reduce that price, and market the discounts they get via their network, enticing consumers and employers to go with them. Then, between the deductible and coinsurance, a patient only pays a portion of that negotiated amount for the surgery. If, for example, a hip replacement’s posted price is $25,000 and the insurance company negotiates it down to $15,000, then an employee might only pay his $5,000 deductible plus 20 percent of the remaining $10,000 (because of coinsurance), resulting in a total bill of $7,000 for the patient. If the employer is self-insured, then its funds cover the rest of the surgery, or $8,000 in this case.


But hospitals also offer their own discounts to patients if they are willing to pay cash.<img src="https://assets.dmagstatic.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-26-at-9.54.44-AM.png" alt="" />
 Avoiding insurance means the hospital gets paid more quickly, and they will offer discounts in order to entice patients to pay cash if they can. REDU dug into the data from New Hampshire’s easily accessible data and compared hospital cash discounts to insurance carrier discounts. They found that the cash discounts beat the carrier all the insurance carrier contracts 47 percent of the time and were the second-best option relative to all the carriers 27 percent of the time.  

Why are hospitals discounting their services so much? There are many reasons, but it is expensive to track down patients who don’t pay, and they also lose funds when insurance companies take their cut. And suppose a patient doesn’t have insurance (which is more likely to happen in Dallas than any other big city in the country outside of Houston). In that case, the hospital is usually getting nothing from them anyway. A lowered price might entice people to pay cash to avoid being harassed later, and the hospital receives more than they would have otherwise. “If the hospital gets that percent of the total list price, they don’t have to chase them down,” Stephenson says. 

The average family deductible in Texas is $4,174, so for a broken arm that is $2,500 but discounted to $1,500 if the employee pays the hospital cash, there could be significant savings. Even if the deductible has been met, employers can coach employees to pay cash if they are able and then the company can submit a claim after the fact, saving $1,000 along the way.</p>

<h5>Subscribe to get upcoming offers</h5>


<>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
                <button className="btn-dark mt-2">Subscribe</button>
            </FloatingLabel>
  
</>

            </Container>
            
</div>
    );
};

export default Specials;