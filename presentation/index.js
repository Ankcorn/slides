// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  Fill,
  Fit,
  List,
  Slide,
  Text,
  Image,
  Link,
  Code,
  BlockQuote,
  Quote,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const { PropTypes } = React;

const images = {
  logo: require("../assets/lnug-logo.svg"),
  nearFormLogo: require("../assets/nearform-new.png"),
  nearFormHiring: require("../assets/nearform_hiring.jpg"),
  pusherLogo: require("../assets/pusher_logo_white.png"),
  pizza: require("../assets/pizza-1.gif"),
  cheers: require("../assets/cheers.gif"),
  condeNastLogo: require("../assets/conde_nast_logo.jpg"),
  halfStackPoster: require("../assets/halfstack-2018.png"),
  nodeconfPoster: require("../assets/nodeconf-2018.png")
};

preloader(images);

const theme = createTheme({
  primary: "rgb(70, 72, 61)",
  secondary: "rgba(255, 255, 255, 0.8)",
  highlight: "rgba(190, 211, 64, 1)"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const emcee = {
  name: "Adam",
  twitter: "admataz"
};


// get this from the latest from https://github.com/lnug/website/blob/master/data/this-month.json and add twitter details if desired
const speakers = [
  {
    "apiSpeakerUrl": "https://api.github.com/users/BethGriggs",
    "speakerUrl": "https://github.com/BethGriggs",
    "title": "Building and deploying Cloud Native Node.js applications",
    "img": "https://avatars2.githubusercontent.com/u/8297234?v=4&s=40",
    "handle": "BethGriggs",
    "name": "Bethany Nicolle Griggs"
},
{
    "apiSpeakerUrl": "https://api.github.com/users/muttoni",
    "speakerUrl": "https://github.com/muttoni",
    "title": "Building an Alexa Skill in 20 minutes using NodeJS",
    "img": "https://avatars2.githubusercontent.com/u/27052451?v=4&s=40",
    "handle": "muttoni",
    "name": "Andrea Muttoni"
},
{
    "apiSpeakerUrl": "https://api.github.com/users/d4nyll",
    "speakerUrl": "https://github.com/d4nyll",
    "title": "Dockerizing JavaScript Applications",
    "img": "https://avatars2.githubusercontent.com/u/9997953?v=4&s=40",
    "handle": "d4nyll",
    "name": "Daniel Li"
}
];

const thisMonth = {
  title: "#78 - October 2018"
};

const nextMonth = {
  date: "28th November 2018",

  speakers: [
    {
      name: "Edd Yerburgh",
      title: "Large-scale refactoring with codemods"
    },
    {
      name: "?",
      title: "??? using NodeJS"
    }

  ]
};


class SpeakerSlide extends React.Component {
  static propTypes = {
    speaker: PropTypes.object
  };

  render() {
    const { speaker } = this.props;
    if (!speaker) {
      return null;
    }

    return (
      <Slide id={speaker.name.replace(" ", "-")}>
        <Heading size={5} textColor="highlight" margin={50}>Next Up</Heading>
        <Heading size={4} textColor="secondary">{speaker.name}</Heading>
        <Heading size={6} textColor="secondary"><S type="italics">{speaker.title}</S></Heading>
      </Slide>
    );
  }
}


class SummarySlide extends React.Component {
  static propTypes = {
    id: PropTypes.string
  };

  static defaultProps = {
    id: "null"
  };
  render() {
    const { id = "" } = this.props;
    return (<Slide align={"center center"} id={id}>
      <Image src={images.logo} margin="0px auto 0px" height="200px" />
      <Heading size={6} textColor="highlight">{thisMonth.title}</Heading>
      {speakers.map((speaker) =>
        <Fit key={speaker.title} textColor="secondary" textSize={38} margin="20px 0">
          {speaker.name} <S type="italics" textSize={24}> <br />{speaker.title} </S>
          <Text textColor="secondary" textSize={20}>
            {speaker.twitter &&
              <span>Twitter: @{speaker.twitter} </span>
            }

            {speaker.github &&
              <span>Github: @{speaker.github}</span>
            }
          </Text>
        </Fit>
      )}
    </Slide>);
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress={"none"}>

        <SummarySlide id={"start"} />

        <Slide id={"safety"}>
          <Heading size={3} lineHeight={3} textColor="secondary">Important</Heading>
          <Appear><Heading size={5} textColor="secondary">🚻 Toilets: ask for a pass </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">🚒 Fire Exits: next to the toilets </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">📡 Wifi: <Code textColor="secondary">CN Guest</Code> </Heading></Appear>
        </Slide>

        <Slide id="code-of-conduct">
          <Heading size={5} textColor="secondary">⭐️ Code of Conduct </Heading>
          <Appear>
            <BlockQuote>
              <Quote textColor="highlight" textSize="24px" lineHeight={5}>
                <p>LNUG is dedicated to providing a harassment-free meetup experience for everyone. We do not tolerate harassment of meetup participants in any form...</p>
                <p>This code of conduct applies to attendees, speakers, and organisers at the monthly meetups and in related social events. This includes slide decks and listings on the job board.</p>
              </Quote>
            </BlockQuote>
          </Appear>
          <Appear>
            <Text textColor="secondary">lnug.org/code-of-conduct.html</Text>
          </Appear>
        </Slide>

        <Slide id="reminder">
          <Heading size={5} textColor="secondary">💡 A reminder </Heading>
          <Appear>
            <Fill textColor="secondary">
              <p>No Q&A - chat in the breaks instead</p>
              <p>Please don't interrupt the speaker</p>
            </Fill>
          </Appear>
        </Slide>

        <Slide id={"hashtags"}>
          <Heading size={3} textColor="secondary">Tweet <Text textColor="highlight">@lnugorg</Text></Heading>
          <Heading size={4} textColor="secondary"><Code textColor="secondary">#LNUG #node #javascript #london</Code></Heading>
          <Appear>
            <Heading size={6} textColor="secondary" margin="20px 0" textSize="20px" textColor="highlight">tweet me too @{emcee.twitter}</Heading>
          </Appear>
        </Slide>

        <Slide id={"gitter"}>
          <Heading size={3} textColor="secondary">discuss!</Heading>
          <Heading size={4} textColor="secondary"><Link href="http://gitter.im/lnug/discuss" target="_blank"><Code textColor="secondary">gitter.im/lnug/discuss</Code></Link></Heading>
        </Slide>

        <Slide id={"jobs"}>
          <Heading size={3} textColor="secondary">jobs talk!</Heading>
          <Heading size={4} textColor="secondary"><Link href="https://gitter.im/lnug/london-node-jobs" target="_blank"><Code textColor="secondary">gitter.im/lnug/london-node-jobs</Code></Link></Heading>
        </Slide>

        <Slide id={"venue"}>
          <Heading size={3} textColor="secondary">Venue</Heading>
          <Image src={images.condeNastLogo.replace("/", "")} margin="0px auto 40px" width="800px" bgColor="#fff" padding="10px" />
        </Slide>

        <Slide id={"food-and-drink"} style="background: #fff">
          <Heading size={3} textColor="secondary">Food and drink</Heading>
            <Image src={images.nearFormLogo.replace("/", "")} margin="0px auto 40px" height="293px"  bgColor="#fff" padding="10px" />
            <Heading size={5} textColor="secondary">Hiring: nearform.com/careers/apply</Heading>
        </Slide>

        <Slide id={"video-production"}>
          <Heading size={3} textColor="secondary">Video</Heading>
          <Image src={images.pusherLogo.replace("/", "")} margin="0px auto 40px" height="293px" />
        </Slide>

        <Slide id={"halfstack-promo"}>
        <Fit><Image src={images.halfStackPoster.replace("/", "")} width="1000px" /></Fit>
        </Slide>

        <Slide id={"nodeconf-promo"}>
        <Fit><Image src={images.nodeconfPoster.replace("/", "")} width="1000px" /></Fit>
        </Slide>

        <SummarySlide id="ready"/>

        <SpeakerSlide speaker={speakers[0]} />

        <Slide id={"community-announcments"}>
          <Image src={images.logo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="highlight" margin={50}>Community Announcements</Heading>
          <Heading size={5} textColor="secondary">Have something to share?</Heading>
        </Slide>

        <Slide id={"submit-a-talk"}>
        <Image src={images.logo} margin="0px auto 0px" height="200px" />
        <Heading size={3} textColor="highlight">Submit a talk proposal!</Heading>
        <Code type="bold" textColor="secondary">github.com/lnug/speakers</Code>
      </Slide>

        {speakers.length > 1 &&
          <SpeakerSlide speaker={speakers[1]} />
        }

        <Slide id={"get-involved"}>
          <Image src={images.logo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="secondary">Get Involved</Heading>
          <Heading size="5" textColor="secondary">Feedback<br /><Code type="bold" textColor="secondary">github.com/lnug/feedback</Code></Heading>
          <Heading size="5" textColor="secondary">Gitter<br /><Code type="bold" textColor="secondary">gitter.com/lnug/discuss</Code></Heading>
        </Slide>


        {speakers.length > 2 &&
          <SpeakerSlide speaker={speakers[2]} />
        }


        <Slide id={"nex-time"}>
          <Image src={images.logo} margin="0px auto 0px" height="140px" />
          <Heading size={4} textColor="highlight" margin={40}>Next Time</Heading>
          <Heading size={5} textColor="secondary">{nextMonth.date}</Heading>
          <List margin="20px 5%">
            {nextMonth.speakers.map((speaker) =>
              <ListItem key={speaker.title} textColor="secondary" textSize={30} margin="20px 0">
                {speaker.name} <S type="italics"> - {speaker.title}</S>
              </ListItem>
            )}
          </List>

          <Code textColor="secondary" bold>
            meetup.com/london-nodejs
          </Code>
          <Text textColor="secondary" italic margin={20}>
            The 4th Wednesday of the month
          </Text>
        </Slide>


        <Slide>
          <Image src={images.logo} margin="10px" height="153px" />
          <Heading size={3} textColor="highlight" >Thank You</Heading>
          <Heading size={5} textColor="secondary">Had a great time? Let us know!</Heading>
          <Text textColor="secondary">github.com/lnug/feedback</Text>

          <br />and thanks again...<br />

          <Image src={images.condeNastLogo.replace("/", "")} margin="10px" height="63px" bgColor="#fff" padding="5px" />
          <Image src={images.pusherLogo.replace("/", "")} margin="10px" height="63px" />
          <Image src={images.nearFormLogo.replace("/", "")} margin="10px" height="63px" bgColor="#fff" padding="5px" />

        </Slide>


        <Slide>
          <Heading size={3} textColor="secondary" margin={30}>After Party</Heading>
          <Heading size={5} textColor="secondary">Theodore Bullfrog</Heading>
          <Text textColor="secondary" margin={10}>
          26-30 John Adam St, London WC2N 6HL
          </Text>
          <Image src={images.cheers.replace("/", "")} margin="40px auto 0px" height="200px" />
          <Heading size={5} textColor="highlight" >Before you go...</Heading>

          Tidy up after yourself!
          Get involved!


        </Slide>


      </Deck>
    );
  }
}
