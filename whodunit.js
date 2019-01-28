Homework.


Episode 1
Outcome 'The murderer is Miss Scarlet.'
- Simple enough. Calls the murderer found in the scenario object.


Episode 2
Outcome 'Error that you can't re-assign a constant."
- You cannot re-assign a constant value. Fairly self explanatory.


Episode 3
Outcome 'First Verdict: The murderer is Mrs. Peacock. Second Verdict: The murderer is Professor Plum.'
- The two different verdicts call the two different murderers, as they have different scopes.


Episode 4
Outcome 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Suspect three is Mrs. Peacock.'
- declareAllSuspects uses the original suspects for suspectOne and suspectTwo, but replaces suspectThree.
  The final console.log calls the original suspectThree, not the one found in declareAllSuspects.

Episode 5
Outcome 'The weapon is the Revolver.'
- changeWeapon is called which updates the value linked to the weapon key found in scenario.


Episode 6
Outcome 'The murderer is Mrs. White.'
- changeMurderer & plotTwist are both called, which update murderer to Mrs. White.


Episode 7
Outcome 'The murderer is Mr. Green.'
- changeMurderer, plotTwist & unexpectedOutcome are all called, but plotTwist & unexpectedOutcome update the
  murderer in plotTwist, and declareMurderer calls the murderer defined at the start, which has only been updated
  by changeMurderer.


Episode 8
Outcome 'The weapon is Candle Stick.'
- changeScenario, plotTwist & unexpectedOutcome are ALL triggered, and they all update the original scenario.


Episode 9
Outcome 'The murderer is Professor Plum.'
  - The if statement is run but when declareMurderer() is called, it refers to murderer definied on the first line.

Episode 10

let murderer = 'Mrs. White'

if (murderer === 'Mrs. White') {
  var murderer = 'Professor Plum'
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

Outcome - Error message - murderer has already been defined.
