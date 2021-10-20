import React from 'react';
import { Accordion, Container, Form } from 'react-bootstrap';

const QnA = () => {
    return (
        <div id="QnA">
            <Container>

                <h1 className="my-5">Most Frequently Asked</h1>
                                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>#1 How do we earn?</Accordion.Header>
                    <Accordion.Body>
                   Health Q&A App

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>#2 why we provide free service?</Accordion.Header>
                    <Accordion.Body>
                    The Cleveland Clinic Health Q&A is a way for patients and consumers to quickly get free health answers and tips from existing physician-reviewed content. The user types or speaks a question into the mobile device
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>#3 what is our goal?</Accordion.Header>
                    <Accordion.Body>
                    Health Q&A App

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>#4 Whom to contact in case of emergency?</Accordion.Header>
                    <Accordion.Body>
                   The Q&A database searches key words in the question to find the best match for the answer. There are 10,000 Q&As currently, with more in development
                        alth content available. You’ll also find that our 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>#5 What if your report result came wrong?</Accordion.Header>
                    <Accordion.Body>
                    Current. U.S. News & World Report consistently names Cleveland Clinic as one of the nation's top hospitals in its annual "America's Best Hospitals" survey and has named Cleveland Clinic's heart program No. 1 in the nation since 1995. Cleveland Clinic is where medical innovations take place and because of this, we are able to provide Q&As on the most cutting-edge topics.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>#6 who pays our salary?</Accordion.Header>
                    <Accordion.Body>
                    Usable. Health information can often be complex and create confusion for many consumers. To make our content more accessible to a broad and diverse audience, we strive to make it as reader-friendly as possible.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>#7 How we collect funds?</Accordion.Header>
                    <Accordion.Body>
                    COVID-19 is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It is highly pathogenic (causes illness), virulent (has harmful effects) and spreads very quickly. The first reports of the disease were reported from Wuhan city, China.
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="8">
                    <Accordion.Header>#8 What to do if an emergency patient comes?</Accordion.Header>
                    <Accordion.Body>
                    Commonly reported symptoms in COVID-19 patients include fever, cough, sore throat, and shortness of breath. Other symptoms may include muscle aches, abdominal pain, and loss of smell.

                    If you are experiencing any of these symptoms, however mildly, you are strongly advised to stay home, monitor your condition, and see a doctor if your condition gets worse.

                    Singaporeans and permanent residents can visit their nearest Public Health Preparedness Clinic (PHPC) clinics for a doctor’s consultation. These general practitioner (GP) clinics, which have been activated by the Ministry of Health to better detect and manage COVID-19 infections, include Parkway Shenton’s clinics and will provide investigation and subsidised treatments for individuals with respiratory illnesses.

                    You can also use the Singapore COVID-19 Symptom Checker for suggestions on care options based on symptoms, age, and recent travel and contact history.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>#9 What to do if a patinet dies in our hospital</Accordion.Header>
                    <Accordion.Body>
                    There are currently two ways to test for COVID-19 – a diagnostic test and an antibody test. In a diagnostic test, also known as a molecular polymerase chain reaction (PCR) test, samples of cells and fluids from the nose or throat are often collected using a nasal swab, before the samples are processed by a machine that detects the virus’s genetic material.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                    <Accordion.Header>#10 Is our pharmacies are open for 24h?</Accordion.Header>
                    <Accordion.Body>
                    From 1 December 2020, individuals requiring a COVID-19 PCR swab test, regardless of the need for travel, can arrange to get tested at selected clinics at Parkway Shenton in Singapore, without the need for government approval
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                    <Accordion.Header> #11 How to book consultant?</Accordion.Header>
                    <Accordion.Body>
                    Azer: Bestavros: The analysis of data collected through various processes (such as the laws requiring police to report on the demographics of people they issue citations during vehicle or pedestrian stops) could be used to uncover racial disparities (and a lot more), for example. First, notice that the data collected from a single process may not be enough to uncover patterns, but rather it is the linkage of this data with (and the analysis of this data in the context of) other data sets that reveal the patterns. And, this is where data science comes into the picture. To do the linkage or analysis correctly, one needs to deploy an arsenal of fairly elaborate computational techniques. For example, the data may have different modalities (i.e. databases, free text, audio, images, video), the data may be noisy or incomplete, the data may be subject to significant privacy constraints, etc. etc. This is where techniques from a variety of computing and data science fields come into play.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                    <Accordion.Header>#11 How to contact doctors?</Accordion.Header>
                    <Accordion.Body>
                    That said, diversifying the sources of data is important because it is seldom the case that one can come up with insights from looking at data coming from a single source. It is quite the opposite. It is only when you look at data from many sources that you can start to see the patterns that are hidden in the various pieces. For example, if you look at individual hospital data, you may not pay too much attention to a handful of cases that look like the flu. But, when you aggregate data from lots of hospitals, what may appear as a little blip in one hospital may be a pandemic in the making. This is a trivial example, but in general, this is true. It’s only when you combine data from health insurers, hospitals, education, transportation, social media, and more that one can come up with insights of how to approach the health inequities that have become so clear with COVID.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                    <Accordion.Header>#12 do i get a discount if i am a regular patinet?</Accordion.Header>
                    <Accordion.Body>
                   The diversity of data sources is actually one important attribute of the “Big Data” buzzword. People often think that what makes “Big Data” is the amount of data we have. That is only one attribute. In addition to the “volume” of data, the three other important attributes to consider are the “velocity”, “variety”, and “veracity” of the data. Collectively, these attributes are called the 4 Vs of Big Data. Velocity refers to how fast the data is being generated and accumulated. Traditional data analysis involves static data stored in some datab
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                    <Accordion.Header>#13 Is it possible to get insaurace service from hospital?</Accordion.Header>
                    <Accordion.Body>
                   Specifically, the team of students looked for trends in sinophobic rhetoric in the context of the COVID-19 pandemic. This work stemmed from original research by Gianluca Stringhini (a faculty member in ECE/ENG and a CDS affiliated faculty), whom the students worked closely with.
                    </Accordion.Body>
                </Accordion.Item>
           </Accordion>


           <h1 className="my-5">Ask US Question</h1>
           <Form className="my-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <button className="btn-primary mb-5" >Submit</button>

     </Container>
        </div>
    );
};

export default QnA;