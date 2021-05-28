export default function NothingYet() {

  return (
    <div className="rightBarred" style={{float: "right"}}>
      <h1  style={{marginBottom: "15px", textAlign: "center"}}>Manifesto</h1>
      <h2 >Mission Statement:</h2>
      <p>I want to make 1 million people 1 million dollars.</p>

      <h2  style={{marginTop: "30px"}}>How the F@#$ do you expect ot be able to do that?</h2>

      <p>Well, for starters, I'm going to hope that I haven't just shot myself in the foot
        by letting you in on the secret. I've read that telling people your goals is the best
        way to ensure you never achieve them. This isn't a goal, though. This is a mission...
        <br/>
      </p>


      <p>Welcome to my creation. Like most anything I work on, I have a difficult time with
        simply calling it done... My mind boggles with possibilities of what I'll be able to
        discover with the vastly improved trough of data. That's alright. This week was focused
        on getting the Front-End pretty enough to show, and I feel that it is just about there.
      </p>

      <h3>What it Does</h3>
      <p>You'll see to your left a sidebar. That sidebar contains all of the stocks found in
        the most recent (performed hourly) search of the /r/wallstbets subreddit. Financial data
        is sourced from the (unofficial) YahooFinance API, and then buffed up a bit in the back-end,
        before finally being delivered unto you.
      </p>

      <h3>Why I'm doing it</h3>
      <p>
        Earlier this year I got to watch a lot of people get rich on meme stocks. Now. I had,
        and, practically still have no money with which to invest, however there was something
        incredibly exciting to me about the financial markets being moved not by mere financial
        accument, but by the actions of the aggregate -- en masse. I thought, surely, there msut
        be a way to model this behaviour, to predict this behaviour, to bring it to the world 
        at large... to amplify it...
        <br/>
        Yeah. That's where I want to take this. Now, helping everyone else get rich does me
        little good without the means to do so myself, so, I'm really hoping to come out of this
        endeavour with success on the career front as well. Luckily for me, this app, and that
        goal amount to one and the same, because what I'd really like to do for work is App Development.
      </p>

      <h3>Stack</h3>
      <p>Back-End API is running off of Sinatra. Ruby is my first language, so it seemed natural
        to pick somewhere comfortable to sort out some of the harder problems. Front-End is built
        using React, with the intent of eventually segueing into React Native for the purposes of
        a mobile app as well.
      </p>

    </div>
  )

}
