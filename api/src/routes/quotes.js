import express from "express";

const quotes = {
  je: [
    {
      text: "I love that fellow. I'd go to hell with him.",
      speaker: "Osborne",
      subject: "Stanhope",
      to: "Hardy",
    },
    { 
      text: "Ever had earwig races?",
      speaker: "Hardy",
      subject: "Osborne",
      to: "Osborne",
    },
    { 
      text: "Dip it in whiskey — makes 'em go like hell!",
      speaker: "Hardy",
      subject: "Osborne",
      to: "Osborne",
      page: "15",
    },
    { 
      text: "Will you have a drink?",
      speaker: "Osborne",
      subject: "Raleigh",
      to: "Raleigh",
    },
    {
      text: "No man of mine's going sick before the attack. They're going to take an equal chance - together.",
    },
    { 
      text: "Yes, I'm his hero.",
      speaker: "Stanhope",
      subject: "Raleigh",
      to: "Osborne",
    },
    { 
      text: "You may find he’s—he’s a little bit quick-tempered.",
    },
    {
      text: "Oh, I know old Dennis’s temper! I remember once at school he caught some chaps in a study with a bottle of whisky. Lord! the roof nearly blew off. He gave them a dozen each with a cricket stump.",
      speaker: "Raleigh",
      subject: "Stanhope",
      to: "Osborne",
    },
    {
      text: "He was so keen on the fellows in the house keeping fit. He was frightfully down on smoking—and that sort of thing.",
    },
    {
      text: "You must remember he’s commanded this company for a long time—through all sorts of rotten times. It’s—it’s a big strain on a man. […] If you notice a—difference in Stanhope—you’ll know it’s only the strain—",
    },
    {
      text: "Because he's stuck it till his nerves have got battered to bits, he's called a drunkard",
      speaker: "Osborne",
    },
    { 
      text: "You'll find the other officers call me uncle",
      speaker: "Stanhope"
    },
    { 
      text: "Drinking like a fish as usual?",
      speaker: "Hardy",
      subject: "Stanhope",
      to: "Osborne",

    },
    { 
      text: "You know you mustn't expect to find him quite the same.",
      speaker: "Osborne",
      subject: "Stanhope",
      to: "Raleigh",

    },
    { 
      text: "How frightfully quiet it is.",
      speaker: "Raleigh",

    },
    { 
      text: "Without being doped with whisky - I'd go mad with fright",
      speaker: "Stanhope",
      act: "1",
      page: "31",
    },
    { 
      text: "He'll write and tell her I reek of whiskey all day.",
      speaker: "Stanhope",
      subject: "Raleigh",
      to: "Osborne",
    },
    { 
      text: "Dear old Uncle, tuck me up",
      speaker: "Stanhope",
      subject: "Osborne",
      to: "Osborne",
    },
    { 
      text: "You keen on gardening?",
      speaker: "Osborne",
      subject: "Trotter",
      to: "Trotter",
    },
    { 
      text: "You don't think I'm going potty?",
      speaker: "Stanhope",
      subject: "Osborne",

    },
    { 
      text: "D'you understand an order? Give me that letter!",
      speaker: "Stanhope",
      subject: "Osborne",
      to: "Osborne",

    },
    { 
      text: "I'm fiddling with my revolver...going off by accident",
      speaker: "Stanhope",
      subject: "Hibbert",
      to: "Hibbert",
    },
    { 
      text: "How awfully nice - if the brigadier's pleased",
      speaker: "Stanhope",
      subject: "Brigadier",
      to: "Colonel"
    },
    { 
      text: "Steady, old boy. Just lie there quietly for a bit",
      speaker: "Stanhope",
      subject: "Raleigh",
      to: "Raleigh",
      page: "123",
    },
    { 
      text: "You see, he's been out here a long time. It—it tells on a man—rather badly.",
      speaker: "Osborne",
      act: "1",
      page: "19",
    },
    {
      text: "Bring him down here.",
      speaker: "Stanhope",
      subject: "Raleigh",
      to: "Sergeant-Major",
      page: "122",
    },
    { 
      text: "Thanks awfully",
      speaker: "Osborne",
      subject: "Hardy",
      to: "Hardy",
      page: "15",
    },

  ],
  hamlet: [
    "To be, or not to be: that is the question.",
    "There is nothing either good or bad, but thinking makes it so.",
    "Though this be madness, yet there is method in't.",
  ],
  macbeth: [
    "Out, damned spot! out, I say!",
    "Double, double toil and trouble; Fire burn and caldron bubble.",
    "Fair is foul, and foul is fair.",
  ],
  othello: [
    "O, beware, my lord, of jealousy!",
    "I am one, sir, that comes to tell you your daughter and the Moor are now making the beast with two backs.",
    "Men should be what they seem.",
  ],
};

router.get("/:play", (req, res) => {
  const play = req.params.play.toLowerCase();

  if (!quotes[play]) {
    return res.status(404).json({ error: "text not found!" });
  }

  const randomIndex = Math.floor(Math.random() * quotes[play].length);
  const randomQuote = quotes[play][randomIndex];

  res.json({ quote: randomQuote });
});

export default router;