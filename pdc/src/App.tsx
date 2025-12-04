import './App.css'
import '@govtechsg/sgds/css/sgds.css';
import SGColony from './assets/SG_Colony.png';
import { Col, Row, Card } from '@govtechsg/sgds-react';
import { APIProvider, Map, InfoWindow, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Polygon } from './polygon';
import gB1 from '/gordonBennett.mp4'
import { useState } from 'react';
import sadGrimwood from '/sadGrimwood.jpg';

type sharedTroops = { position: google.maps.LatLngLiteral, title: string }
const locations: sharedTroops[] = [
  {
    position: { lat: 1.423733, lng: 103.748979 },
    title: "Dalforce"
  },
];

type enemyTroops = { position: google.maps.LatLngLiteral, title: string }
const places: enemyTroops[] = [
  {position:{lat: 1.461061, lng: 104.041047},
    title:"Japanese Troop Concentrations reported here"
    },
    {position:{lat: 1.364273, lng: 104.123444},
    title:"Japanese Troop Concentrations reported here"
    },

]

const PoiMarkers = (props: { pois: sharedTroops[] }) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState<number | null>(null);

  return (
    <>
      {props.pois.map((poi: sharedTroops, index: number) => (
        <div key={index}>
          <AdvancedMarker
            position={poi.position}
            onClick={() => setInfoWindowOpen(index)}
          >
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>

          {infoWindowOpen === index && (
            <InfoWindow
              position={poi.position}
              onCloseClick={() => setInfoWindowOpen(null)}
            >
              <div style={{ padding: '8px' }}>
                <strong>{poi.title}</strong>
              </div>
            </InfoWindow>
          )}
        </div>
      ))}
    </>
  );
};

const EnemyMarkers = (props: { pois: enemyTroops[] }) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState<number | null>(null);

  return (
    <>
      {props.pois.map((poi: enemyTroops, index: number) => (
        <div key={index}>
          <AdvancedMarker
            position={poi.position}
            onClick={() => setInfoWindowOpen(index)}
          >
            <Pin background={'#ffffffff'} glyphColor={'#ff0000ff'} borderColor={'#000000ff'} />
          </AdvancedMarker>

          {infoWindowOpen === index && (
            <InfoWindow
              position={poi.position}
              onCloseClick={() => setInfoWindowOpen(null)}
            >
              <div style={{ padding: '8px' }}>
                <strong>{poi.title}</strong>
              </div>
            </InfoWindow>
          )}
        </div>
      ))}
    </>
  );
};

// const polygonPaths = [
//   { lat: 1.272686, lng: 103.577527 },
//   { lat: 1.457341, lng: 103.865231 },
//   { lat: 1.369064, lng: 104.010800 },
//   { lat: 1.306596, lng: 103.815106 } // Closing the loop
// ];

function App() {
  return (
    <>
      <Row>
        <Col style={{ width: '100%', backgroundColor: "#f6eee3" }} lg="5" xs>
          <div className="topBar">
            <h1>Joint Cabinet Crisis</h1>
            <a className='topBarLinks' href="#/">Updates</a>
            <a className='topBarLinks' href="https://forms.gle/yMiJGAvitpbhFC6k6" target='blank'>Directive Form</a>
            <a className='topBarLinks' href="#/editor">Map Editor</a>
            <a className='topBarLinks' href="#/council-directives">Council Directives</a>
          </div>
          <div className='firstFromTop'>
            <h1>
              <img src={SGColony} width="20%" style={{ margin: '2vw' }} alt="Singapore Colony Flag" />
              <br />
              Crisis Updates</h1>
            <h2>The Malayan Times</h2>
          </div>

          <APIProvider apiKey={'AIzaSyDdBGrtXdcOkvVC37W-WoCQIK9TjAwYGUs'} onLoad={() => console.log('Maps API has loaded.')}>

            <Map
              className='main-map'
              defaultZoom={11.5}
              mapId={"eb87b183946a00eea25854ea"}
              defaultCenter={{ lat: 1.3521, lng: 103.8193 }}
              disableDefaultUI={true}

            >
              <Polygon paths={[
                { lat: 6.751390, lng: 99.991443},
                { lat: 6.478561, lng: 102.298572 },
                {lat: 5.249637, lng: 103.188464},
                {lat: 4.663522, lng: 103.551013},
                //change this
                { lat: 1.502523, lng: 104.237467},
                //Add coords here ig
                { lat: 1.393778, lng: 103.411972},
                {lat: 2.580405, lng: 101.210925},
              {lat: 3.666419, lng: 100.749499},
            {lat: 5.331137, lng: 100.123279},]}
                fillColor={'#ff0000ff'}
                strokeColor={'#ff4a4aff'} />

                <Polygon paths={[
                { lat: 1.216885, lng: 103.606947},
                { lat: 1.250523, lng: 103.788908},
                {lat: 1.269058, lng: 103.794402},
                {lat: 1.287593, lng: 103.617934},]}
                fillOpacity={1}
                fillColor={'rgba(0, 0, 0, 1)'}
                strokeColor={'#000000'} />

              <PoiMarkers pois={locations} />
              <EnemyMarkers pois={places} />
            </Map>

          </APIProvider>

          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>GO! GO! GO!</Card.Title>
              <Card.Text>




Thanks to the efforts of our leaders, the people of Singapore have received an overwhelming amount of messaging encouraging them to adopt an extremist stance against the Japanese. Many are now hoarding supplies at home, and also stocking up on potential weapons such as kitchen knives and hammers and sickles. However, this has also bred suspicion between neighbours – they now live in fear that everyone else is a potential ally of the Japanese. Fights are breaking out on the street due to these misunderstandings and tension.

Well, on the bright side, they are now wary of any and all people, regardless of race. 




              </Card.Text>
            </Card.Body>
            </Card>

          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>
            <Card.Img
              alt="Picture of Grimwood looking sad"
              src={sadGrimwood}
              variant="top"
            />

            <Card.Body>
              <Card.Title>Grim for Grimwood</Card.Title>
              <Card.Text>


Colonel Francis Reginald Grimwood has been formally expelled from the British East Asia Cabinet with immediate effect. A formal investigation has been initiated, and Colonel Grimwood has been suspended from his military post until investigations have been concluded.




              </Card.Text>
            </Card.Body>
            </Card>

          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Press Release by Gordon Bennett</Card.Title>
              <Card.Text>
                <video autoPlay={false} controls={true} src={gB1} style={{width: '100%', height: '150vw'}}></video>
              </Card.Text>
            </Card.Body>
            </Card>


<Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>

MR Nedyam Raghavan has surprised us all with his fiery, impassioned speech tonight. 
To quote: ”As some of you may know, there is a recent press release by a Mr S C Goho. In it, it is stated that the “situation remains under firm control”. I would like to agree with this statement- the situation, is in fact, under firm control. The control of the Japanese! The Japanese armed forces have already swept across Johore, on the verge of entering Singapore, going across the entire peninsular in mere weeks. Meanwhile, the British have been going around, neglecting crime, blowing up our dams AND our people. How can Mr Goho, supposedly representing the interests of the Indian people, repeat this British propaganda with a straight face? To combat this, Mr Goho has urged people to “trust the cooperative arrangements that have long guided Singapore’s security”. I believe Mr Goho has made 2 factual errors in this statement. First, “cooperative arrangements”. I believe the better phrase would be “letting the British continue with their incompetent, ineffective defence”. Next, on “Singapore’s security”. To reflect our situation right now, I believe the word security should be struck out. What security have we now? With disasters on the front and in our lands, with looting, crime at an all time high, it is clear under the British cabinet right now we have none of that. It is disappointing indeed, and rather incredulous that Mr Goho will repeat those claims, notwithstanding the plain truth in front of our eyes.”
We have yet to receive a response from Mr Goho, and while many skeptics of his speech have expressed gratitude to Mr Raghavan for representing their doubts, others question whether Mr Raghavan would be able to do anything better despite his complaints.
Mr Shrish Chandra Goho and Col. Francis Reginald Grimwood has also published a press release to the public from the British East Asia Cabinet and the People’s Defence Cabinet.
 "In light of recent events, including the unfortunate collapse of the tunnel works and the tragic flooding caused by the dam explosion, our communities have endured immense shock and grief. Lives have been lost, homes damaged, and spirits shaken. At a time when the Japanese threat continues to advance, every citizen deserves reassurance, stability, and clarity.
The Indian Passive Defence Committee wishes to affirm that the British East Asia Command and the People’s Defence Cabinet are now working jointly and decisively to protect Singapore. Despite earlier missteps, both bodies have united around a singular priority: the safety and welfare of the people.
British engineers, medical teams, and supply units are currently being deployed alongside local leaders to restore rice stocks, rebuild shelters, and deliver aid to affected families. New channels of communication between the British Command and the PDC have been formalised to ensure that decisions are transparent, coordinated, and driven by humanitarian needs rather than haste.
We urge the public to remain calm and to trust that the situation is in the hands of experienced officers and dedicated civil representatives. Disorder, panic, and division will only weaken our collective defence. Strength lies in unity, cooperation, and faith in the institutions committed to safeguarding our island.
Singapore stands strongest when its people stand together. We will overcome this challenge not through fear, but through collective resolve and trust." Attached with this will be an illustration of Mr Shrish Chandra Goho and Col. Francis Reginald Grimwood shaking hands to symbolise their collaboration in the goal to prioritise the safety of Singaporeans.”
Some people have questioned whether they truly represent the wish of the two Cabinets, but we would have to wait for their response to find out. This has sparked much discussion as to how this would proceed, and whether there would be an improvement in civilians’ lives through joint activities between the two. One consensus has been reached though – the most urgent thing right now is for these two Cabinets to save the people from Japan’s attacks.


<br/>

Abdul Manan Bin Ali ALSO release a press release with the following:
"My fellow Malays. The Japanese are chasing us out of our ancestral homes at a rapid pace. I understand your worry, as the British are seemingly incompetent as well.
What have we done, however? Well, the Malay Union has been working hard to help the people of Singapore. We've begun food distribution together with Mr Tay Koh Yat. 750 of our proud, brave Malays are going around distributing food. And we’re constructing refugee camps for the poor, poor malay refugees from the peninsula. But not everyone likes this. Some of us want to charge $3 a day for housing! The refugees: they have no homes, no food, no employment, and they want to charge them exorbitant fees for housing! But we cannot let them divide us. Us Malays need to stick together. As such, the Malay Union is pleased to announce our Malay Housing Plan! We have constructed refugee housing camps in Eunos. These camps have free water, food, and are rent-free, for all the Malays fleeing from the Brutal Japanese Occupation. After all, we Malays need to take care of ourselves. So we must not relent! Us bumiputera have a duty to ourselves.
What is this duty? Well, there have been reports about people throwing tomatoes at officials’ doors, jumping into wells… I’d like to reassure our malay community. The Japanese may be at our doorstep, but we will never back down! They will never break our spirit! Please, maintain order. The British may be short-sighted, but they’re our best shot. Today, Allah is with the British. If you want us to win, if you want us to go back to our homes, please support them. I plead with you, please volunteer, if you have the capability. We need people to build houses, distribute food, maintain law and order. If you can help, please help.
Yet there have been many incidents that test our morale. The devastating collapse of the British Headquarters killed many of our kin, the flooding of many Kampongs have resulted in more deaths and food shortages, and the shelling of Johore Bahru has killed 50 brave souls. This is outrageous, citizens! I share your anger and rage. But still, would we prefer the Japanese? Those murderers, who treat us worse than animals? Out of these 2, the British are much preferable. So please support us, the PDC, and the British.
I pray that the fate and future of our country will always be in the hands of those who are sincere and may Allah prevent our country from falling into the hands of those who will bring us destruction. May Allah bless our efforts."
While many Malays have cheered loudly at his speech, some of the wider community have raised concerns: rumours say that refugees seem to be suffering from a lack of supplies due to the poor conditions of their living, and apparently no concrete plans to get them back on their feet. 
Last, MR Tay Koh Yat release a press article with the content below:
“Fellow residents of Singapore,
In these past days, our people have endured crisis after crisis. As if the tunnel collapse and scattered violence were not enough, we have now been struck by another grave blow. A rogue British unit: acting without authorisation or regard for civilian life, and has detonated the dam along the northern river. Kampongs downstream were swept away within minutes. Families were separated, homes destroyed, and far too many lives lost before anyone could flee.
The resulting flood has ravaged everything in its path. Our adjacent rice fields, already strained by war disruptions, have been completely uprooted, leading to a sudden and severe rice shortage. The shock of the water, the debris, and the fear spreading through the community have created real panic. I want every family reading this to know that we recognise your fear and grief.
And I also want to make something else clear. We are not abandoning you. And we are not waiting for someone else to step in.
The People’s Defence Cabinet has already begun a coordinated civilian response. We are already making action and doing our best to amend the current issues at hand.
This is a moment of fear, but it is also a moment for discipline, organisation, and unity. The situation is serious, but it is not hopeless, and it is not unmanageable. We will continue to act, continue to protect all, and continue to stand with every community affected by this disaster.
Singapore can get through this together.”
There is certain confusion as to what is the “coordinated civilian response” by the entirety of the PDC, though some are relieved as to this response addressing their fears. However, it sure sounds entirely like fluff… would this just prove to be empty promises?
The amount of press releases these days sure is alarming! If this were to continue, this would become a sign of our leaders dilly-dallying creating these fluffed up responses instead of actually helping us in any way.



              </Card.Text>
            </Card.Body>
            </Card>

          
          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Prospective Japanese Landings</Card.Title>
              <Card.Text>

Several bicycles have been spotted crossing the causeway while British guards were napping, and their current locations are unknown.

Japanese forces have also executed unexpected amphibious landings along the western coastline in the night, specifically at Tengeh and Lim Chu Kang, striking directly into the island’s flank. These landings were conducted with speed, precision, and supported by covering fire from light naval craft, overrunning several Dalforce forward contingents who were positioned for harassment actions rather than pitched battle, despite their best and valiant efforts. They have forced nearby British deployments and artillery positions into a hasty, disjointed retreat inland. A coherent enemy footprint has emerged on Singapore’s soil, and the western sector is now under severe duress.

It seems as if the Japanese know when and where the British would be least aware, how might they be getting such information???


              </Card.Text>
            </Card.Body>
            </Card>

          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
MR Shrish Chandra Goho has just released a press release to be published in newspapers and funded by the Indian Passive Defence:

"In light of recent difficulties faced across several neighbourhoods, the Indian Passive Defence Council wishes to reassure all residents that the situation remains under firm control. Our British partners in Malaya Command have confirmed that essential support is already being deployed to stabilise conditions and strengthen safety across the southern districts.

We understand that incidents such as the partial collapse of a building and the tragic loss of two civilians have caused unease among families. Every life is precious. The authorities have opened a full review into the circumstances, and assistance has been extended to the affected households. At this moment, it is vital that we do not allow isolated events to overshadow the wider efforts to protect the community during a period of regional tension.

The council urges all citizens to remain calm and to trust the cooperative arrangements that have long guided Singapore’s security. The British engineering units and the Singapore Volunteer Corps are working closely with our passive defence officers to reinforce shelters, improve access to supplies and ensure that essential services remain uninterrupted. These combined efforts can only succeed with unity and public confidence.

Residents are advised to remain calm and stay in the southern areas of Singapore where their fellow Singaporeans are for the time being. This is to allow a concentrated distribution of resources, new employment opportunities and expanded welfare support. This temporary adjustment will help us assist you more effectively and keep families together and safe.

Community organisations, including the Singapore Indian Association, have been invited to lead morale‑building activities and to commission cultural projects that remind us of our common purpose. Music, public messages and shared volunteer work will help keep spirits strong.
We remind everyone that disorder, panic or demonstrations will only weaken our collective resilience. At this time, solidarity is our greatest strength. Your patience and cooperation will allow us to protect one another and to face the coming days with confidence.

Issued by the Indian Passive Defence Council"

<br/>We have yet to receive a response.


              </Card.Text>
            </Card.Body>
            </Card>

          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Local Radio Host:</Card.Title>
              <Card.Text>

We are sorry to report the death of 50 civilians at the hands of the bombing in Johor Bahru. According to our on-site reporters, this artillery squad was commanded by Lewis Heath, and supposed to fire “on sight of Japanese troops”. Unfortunately, they were not able to stop their attack for locals around the area, causing stray shells to land near their living quarters. Fortunately, they were able to take down 250 Japanese, though the death of our beloved civilians make us wonder if this campaign was worth the hurt.

              </Card.Text>
            </Card.Body>
            </Card>

          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Water, water everywhere</Card.Title>
              <Card.Text>
Wonderful! A certain crazed British squad has blown up a dam. Pretty inconsiderate, considering that there were multiple kampongs located along the stretch of river. Multiple locals died due to the explosion, and this dam explosion has also triggered a massive flood that overwhelmed all surrounding areas. This swept away the adjacent rice fields, resulting in a severe rice shortage. Unfortunately, many locals have also passed due to this flood, and it has caused disarray and panic within the population.
              </Card.Text>
            </Card.Body>
            </Card>


<Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>You’re out of touch, everyone’s out of time</Card.Title>
              <Card.Text>
Due to the unsupervised digging of tunnels by the locals under British property, this has caused the entirety of the headquarters to collapse. Well, that’s what happens when you remove the foundation of the building… Due to this sudden collapse, many locals have died, and the rest are severely traumatised by the death of their fellow workers, with many of them just jumping into wells and saying they are going to believe in some childhood folktales of sacrificing themself for their lovers. Well, there goes someone’s plan to fill the tunnels up with rice lol.

This comes in addition to a certain British general’s troops shooting 2 workers in the mines as well, causing tremendous hurt to local populations.

AND THE JAPANESE IS LITERALLY AT OUR DOORSTEP!!! According to returning scouts, the Japanese are taking up arms and getting ready to march across the Causeway. The news have sparked outrage among troops, who protest that no action has been taken to even prevent this by the British authorities.

After receiving so much disturbing news within a short period of time, the public have taken to the streets, protesting the inaction of the British and the short sightedness of the PDC. Some have even taken to throwing tomatoes at officials’ doors! Splat.

We’re running out of time to deal with this, and yet our leaders are so out of touch with reality…




              </Card.Text>
            </Card.Body>
            </Card>

          <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

                    <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Even more PRESS-ing issues:</Card.Title>
              <Card.Text>
MR Saminathan Amalu has released a press statement, saying in both English and Tamil that “The Japanese have done a lot of atrocities: from the Nanjing Massacre that killed 100 000 to 200 000 people, to the killings of 500 000 Chinese people using chemicals. Why should we not fight against them? If we don’t fight, they are going to kill us as if we are flies! Citizens! Please enrol in the army or any support groups (voluntary cooking, voluntary medics)”. Some English-speaking Chinese loudly support this, cheering for the attention put on this matter. The general public seem upset at the idea of these atrocities, but not many have enrolled yet.


Shrish Chandra Goho has also issued a press release through the radio on behalf of the Singapore Indian Association:

"Singapore stands at a moment where fear and uncertainty threaten to divide our communities. Yet it is precisely in these trying times that unity becomes our greatest safeguard. The Japanese advance, the strain on supplies, and the growing unease within our neighbourhoods require not only military preparation but also a strong and steady spirit among our people.

The Singapore Indian Association therefore calls upon all communities to place cooperation above suspicion, patience above panic, and solidarity above hostility. No race in Singapore stands alone. Every family, whether Malay, Chinese, Indian, Eurasian or otherwise, shares the same streets, the same anxieties, and the same hope for safety. Blaming one another will only weaken our common defence.

To support this effort, the Association will contribute a portion of its community reserve funds, together with small private donations from business owners who have pledged their support. This pool will be directed towards morale activities, community relief, and public reassurance programmes endorsed by the People’s Defence Cabinet. No household will be asked to provide contributions, but would be highly encouraged to join our volunteer force to make a difference.

As part of this campaign for unity, the Association has commissioned a well-respected member of our musical circle to compose an original song for broadcast and public gatherings. This piece will celebrate courage, harmony, and the belief that Singapore can endure hardship if its people stand as one. The song will be released shortly to the public and taught in community centres and schools.

Let us remind ourselves that unity is not a luxury in wartime. It is a defence strategy in its own right. We urge every citizen to look out for one another, to speak kindly, and to reject rumours that foster division. Together, we shall face the days ahead with strength and common purpose.

Issued on behalf of the Singapore Indian Association"

Information: The song will be sent out to the people through the radio and will have the effect of making them feel encouraged. The funds to send this message through the radio will come from the Singapore Indian Association funds


              </Card.Text>
            </Card.Body>
            </Card>

            <Card.Body>
              <Card.Title>Some PRESSing matters</Card.Title>
              <Card.Text>
Mr Nedyam Raghavan has taken the stage today to address the members of the public: 

“Currently, there is lots of British incompetence. The colonialist government cannot provide even basic resources to citizens like you and me. To step up and actually serve the people, the IIL shall continue its current aid program. This shall take place weekly every Monday, instead of just being a one time thing, to aid as many people as possible. We urge, for the umpteenth time, for more help, especially volunteers, to aid the Indian community as much as possible. This will take place not only via the current aid program, but also other forms of service. The IIL see that many Indians are frustrated to be helpless in helping others. Well, this is your chance; join the IIL and we will serve the Indian community together!

To the members of the Indian community, the IIL has finished the distribution of our first round of aid. We understand that there is not enough aid for everyone, due to us being a small organisation, and that supplies are scarce nowadays. We have tried our best, and will continue to do so to help all fellow Indians in need. We now go back to our call for more volunteers, and funding. We will be more able to provide for everyone. To register to volunteer, just tell any IIL volunteer that you see, and we will get back to you shortly. Again, we shall continue and try our best to provide aid and essentials.”

A significant crowd, largely from the Indian community, gathered to hear Mr. Nedyam’s address, responding with enthusiastic applause. While some attendees praised him as the sole affluent member of the People’s Defence Cabinet who genuinely understands and aims to aid his community, others expressed reservations about the feasibility of his proposals, claiming that all he does is “give empty promises and fluffed up responses”. Regardless, his public statement has certainly captured widespread attention.

Meanwhile, <em>Mr Lee Choon Seng</em> has also released a public statement in both English and Chinese, expressing his wish to “appease the civilians and ensure that they maintain trust in the People's Defense Cabinet”. Though some have questioned his motives in “appeasing the civilians”, the statement was positively received by most readers, who saw it as a finally useful (or at the very least, tangible) action from the People’s Defence Cabinet.

To quote him, "We have heard the voices of the people, and we understand. Although it may seem that we are expanding our companies for our own profit, I can assure you, with all my heart, that our resources will be donated back to the community, to improve YOUR lives. We are simply investing in the company, and I pledge 10,000 dollars to the Buddhist humanitarian network, which will give you all food, water and basic living resources. We thank you for your patience and understanding."

We are waiting for their counterparts, and the British, to respond to these interesting updates.

              </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Whew!</Card.Title>
              <Card.Text>
                With the police finally back to their original postings, the crime rates have finally gone down. However, this incident has bred doubt among the locals towards the authorities, seeing this as a sign of the British’s incompetence. The citizens are now looking more favorably towards the People’s Defence Cabinet, in light of their recent fiery speeches and proposals that have actually aimed to provide for their people’s practical needs.
<br/>
In other news, critical railway tracks in Malaya have been destroyed by a surprise attack by British SOE forces yesterday. While the attack has slowed down the Japanese advancements, it has been widely reported that the Japanese are working day and night to repair these railroad infrastructures.
              </Card.Text>
            </Card.Body>
            </Card>


            <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Useless, just absolutely useless!</Card.Title>
              <Card.Text>
                What are our policemen doing?! Even they do not know. Attempting to scout Bukit Timah, distributing rice… what are they, Boy Scouts or policemen?! Lately, it seems to be the former. Tensions have been continuously increasing within the population as crime rates move beyond an all time high.
Even worse, some deranged British man has been proclaiming that blowing up the Causeway will achieve some sort of safety. What have our so-called leaders been up to? Every day we fear for our lives as the Japanese close in on us, and NOTHING has been done to help us. 
Useless! Just absolutely useless! 

              </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Body>
              <Card.Title>Article from the Nanyang Independent</Card.Title>
              <Card.Text>
                Since last weekend, waves of refugees have poured into the south with fractured, desperate accounts of Japanese columns moving through Johor. With almost no substantial British forces left in the state, the situation north of the Causeway is now understood almost entirely through the testimonies of those fleeing, farmers, clerks, rubber tappers, whole families arriving with little more than the clothes on their backs.
Their stories converge on one point: the Japanese advance has been swift, erratic, and largely unhindered. Villagers speak of enemy troops appearing without warning, bicycle units emerging from estate roads, infantry filtering through plantations long assumed impenetrable. With railways cut and most main roads damaged or abandoned, the British authorities themselves seem to possess only fragments of intelligence on where the front line now lies.
              </Card.Text>
            </Card.Body>
            </Card>

<Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>RATS</Card.Title>
              <Card.Text>
                While locals were initially happy with the increased supply of rice, deploying policemen to provide rice for each household may not have been the best choice. Crime rates, ranging from petty crimes to violent looting, have skyrocketed. Tension and suspicion are rising between neighbours, while the local police have reported an overwhelming amount of work for them to do, leading to burnout across the board. Many have protested the uselessness of their jobs and their inability to do anything to protect their fellow citizens.
              </Card.Text>
            </Card.Body>
            </Card>


            <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Working..?</Card.Title>
              <Card.Text>
                The affluent seem to be hard at work increasing their revenue! Really “caring for their fellow citizens”, huh… Locals are in a frenzied panic, hoarding supplies before an imminent attack from the Japanese, while those company owner SNAKES are taking their sweet time building their empire… 
                <br/>On the other hand, boats carrying rice have been streaming from the southern British Raj. Rumours have been said that it was coordinated by a certain Sir John Bagnall. The people are especially pleased by the recent move, with some even calling for him to be the next Governor. 
                <br/>As we are talking, the Japanese have advanced quickly towards us. Would there be <em>anything</em> done to save this nation from doom?!
              </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>

            <Card.Body>
              <Card.Title>Threat in the Horizon</Card.Title>
              <Card.Text>
                Witness accounts and fragmented military intelligence agree on one overriding fact: The Japanese advance is immense, advanced and highly coordinated –  a mass capable of overwhelming what remains of the mainland’s defences. Though exact estimates are currently impossible to discern, preliminary reports place their strength between 6700 and 67,000 men in the forward echelons alone. Armoured support accompanies them, with artillery fire being felt north of Johor’s boundaries. Japanese aircraft continue to patrol overhead, suggesting that air dominance (or something close to it) is now theirs along the final approach towards Singapore.

Meanwhile, Singaporean society begins to stir. There are growing suspicions of British incompetence, as food availability begins to dwindle amongst the coffeehouses and establishments of the island colony. Local morale has only been on a downward decline since the air raid sirens first sounded over the city. Clerks in government offices move with a new urgency, doors close more decisively, and maps are consulted with growing frequency.

The city remains largely functioning, yet beneath the outward calm lies the unmistakable awareness that the buffer to crisis is thinning with every hour.

Your decisions and cooperation between the many layers of bureaucracy will determine how Singapore meets the approaching storm with preparation or with hope alone.

Good Luck.
              </Card.Text>
            </Card.Body>
            </Card>

          <Card style={{marginLeft:'2vw', marginRight:'2vw', marginBottom:'4vw'}}>
            {/* <Card.Img
              alt="img alternate text goes here"
              src={groupPic}
              variant="top"
            /> */}
            <Card.Body>
              <Card.Title>
                Welcome to Crisis!
              </Card.Title>
              If you are part of the People's Defence Cabinet, welcome!
              <br/>
              Else if you are part of the British East Asia Cabinet, go back to your cabinet updates page...
            </Card.Body>
          </Card>

          {/* <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>
            <Card.Body>
              <Card.Title>
                Another Cool Title
              </Card.Title>
              <Card.Text>
                Some serious crisis update text goes here.<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Card.Link href="#">
                New link to new thing
              </Card.Link>
            </Card.Body>
            <Card.Img
              alt="img alternate text goes here"
              src="https://picsum.photos/300"
              variant="bottom"
            />
          </Card> */}
          {/* <Card style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '4vw' }}>
            <Card.Img
              alt="img alternate text goes here"
              src="https://picsum.photos/600"
              variant="top"
            />
            <Card.Body>
              <Card.Title>
                Very Cool Title
              </Card.Title>
              <Card.Text>
                Some funny crisis update text goes here.<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Card.Link href="#">
                Link to something
              </Card.Link>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </>
  );

}

export default App;
