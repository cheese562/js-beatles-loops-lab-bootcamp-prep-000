function theBeatlesPlay(musicians, instruments)
{
  // create empty array stored in a variable
  var array = []
  
  // loop over array of musicians
  for (let i = 0; i < musicians.length; i++)
  {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  
  return array
}

function johnLennonFacts(facts)
{
  var array = []
  var i = 0
  while (i < facts.length)
  {
    array.push(facts[i])
  }
  return array
}