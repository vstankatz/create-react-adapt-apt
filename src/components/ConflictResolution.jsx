import React from 'react';
import './ConflictResolution.css'

export default function ConflictResolution(){
  return(
    <div>
      <div className='example'>
        <h1>Example Conflict:</h1>
        <p><span className='underline'>Michael</span>: [in front of disputed poster] Okay, since this is the disputed poster. Now, one at a time, I want you to express your feelings using "I" emotion language and no judging or "you" statements. <br/> <br/>
<span className='underline'>Angela</span>: I got this poster for Christmas, and I feel I want to see it everyday. It makes me feel like the babies are the true artists, and God has a really cute sense of humor. <br/> <br/>
<span className='underline'>Michael</span>: Come on, seriously, that? <br/> <br/>
<span className='underline'>Oscar</span>: I don't like looking at it. It's creepy, and in bad taste, and it's just offensive to me. It makes me think of the horrible, frigid stage mothers who force the babies into it. It's kitsch. It's the opposite of art. It destroys art. It destroys souls. This is so much more offensive to me than hardcore porno. I'm talking about the... <br/> <br/>
<span className='underline'>Michael</span>: Okay, okay. Stop, stop, stop! Let's see if we can just brainstorm and find some creative alternatives...</p>
      </div>
      <h1>Possible Solutions</h1>
      <div className='loseLose'>
        <h3>Lose-Lose</h3>
        <p>If we do lose/lose, neither of you gets what you want. Do you understand? You... you would both lose. Now I need to ask you, do you want to pursue a lose/lose negotiation?</p>
    </div>
      <div className='winLose'>
        <h3>Win-Lose</h3>
        <p>Take the poster down.</p>
    </div>
      <div className='compromise'>
        <h3>Compromise</h3>
        <p>Okay, that is called a compromise. And it is style 3. And it is not ideal.</p>
    </div>
      <div className='winWin'>
        <h3>Win-Win</h3>
        <p>Everybody wins but Michael is sad.</p>
    </div>
      <div className='winWinWin'>
        <h3>Win-Win-Win</h3>
        <p>The important difference here is with win-win-win we all win, me too. I win for having successfuly mediated a conflict at work.</p>
        <p>How about Angela makes the poster into a t-shirt, which Oscar wears. That way, he can never see it and whenever she looks at Oscar, she can see it. Win/win/win.</p>
    </div>
    </div>
  );
}
