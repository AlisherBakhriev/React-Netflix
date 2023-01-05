import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import "./Accordion.css";
function Accordions() {
  return (
    <div className="accordion">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion_main">
        <Accordion className="acc">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordion_text">What is Netflix?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion_text">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="acc">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="accordion_text">
              How much does Netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion_main">
            <Typography className="accordion_text">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="acc">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="accordion_text">
              Where can I watch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion_main">
            <Typography className="accordion_text">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch insta
              <br />
              <br />
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="acc">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="accordion_text">How do I cancel?</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion_main">
            <Typography className="accordion_text">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="acc">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="accordion_text">
              What can I watch on Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion_main">
            <Typography className="accordion_text">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="acc">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="accordion_text">
              Is Netflix good for kids?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion_main">
            <Typography className="accordion_text">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
              <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="acc">
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="accordion_text">
              Why am I seeing this language?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion_main">
            <Typography className="accordion_text">
              Your browser preferences determine the language shown here.
            </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>
    </div>
  );
}

export default Accordions;
