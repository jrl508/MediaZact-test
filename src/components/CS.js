import React from 'react';

const CS = () => (
  <div className='card cs-questions'>
    <h2>CS Questions:</h2>
    <h3>
      Every day a new frog is born weight 0grams and grows at a rate of
      10grams/day, maxing out at 100grams in 10 days
    </h3>
    <h3>On day n, what is the total weight of the frog community?</h3>
    <h4>My Logic:</h4>
    <p>
      If 1 frog is born per day, the relationship between number of frogs to
      number of days is 1:1 therefore assuming we begin with 0 frogs; n_frogs ==
      n_days.
    </p>
    <p>
      A frog grows at a rate of 10grams/day starting from 0grams, by this logic
      the first frog on day 1 weighs 0 grams and will not reach its max weight
      until its 11th day. On the 11th day there would be a total of 11 frogs
      with the first frog at max weight, and the community's list of weights
      would be like so: <br></br>
      <br></br>
      [0,10,20,30,40,50,60,70,80,90,100]
    </p>
    <p>
      The fun part starts after the 11th day as the subsequent frogs start to
      max out in weight. Say 15 days have passed we now have 15 frogs and 5 of
      them are fully grown ( 15frogs - 10days = 5 ) and our community looks
      like:
      <br></br>
      <br></br>[0,10,20,30,40,50,60,70,80,90,100,100,100,100,100]
    </p>
    <p>
      If we were to separate the community of frogs into 2 distinct groups,
      "juvenile" and "matured", the former being frogs under 100 grams and the
      latter being at max weight, a few things would hold true:
    </p>
    <ul>
      <li>
        If there are more than 10 frogs there will always be only 10 that are
        juvenile and the matured being the difference
      </li>
      <li>A full set of juvenile frogs will have a total weight of 450</li>
      <li>
        The total weight of matured frogs will be the number of matured * 100
      </li>
    </ul>
    <p>
      Now if we dust off our old Calc I textbook we could find a formula for
      sigma notation that will take care of finding the sum of all juvenile
      weights{' '}
    </p>
    <div className='equation'>
      <div className='summation'>
        {' '}
        <sup>k</sup> <div>&Sigma;</div> <sub>n=1 </sub>
      </div>
      <span>
        10(n - 1) = k(a<sub>1</sub> + a<sub>n</sub>)/2
      </span>
    </div>

    <p>
      Where <i>k</i> is the number of days, <i>n</i> is the respective day
      starting from 1, and{' '}
      <i>
        a<sub>n</sub>
      </i>{' '}
      represents the weight of the frog on that day.
    </p>
    <h4>psuedo code</h4>
    <p>
      In order to translate that equation into code we could clean it up a bit.
      Since we know a<sub>1</sub> is always going to be 0 grams we can omit it
      from the equation and rearrange it a bit to produce(using n as number of
      days as originally asked): <br></br>
      <br></br>{' '}
      <code>
        juv_sum = 5n<sup>2</sup> - 5n
      </code>
      <br></br>
      <br></br>
      Now to account for any fully matured frogs we simply multiply their weight
      by their group size:
      <br></br>
      <br></br>
      <code>mat_sum = (n - 10) * 100 </code>
      <br></br>
      <br></br>
      Instead of some convoluted expression we can just use the two we have and
      create a statement based off of what we know therefore calling whichever
      is necessary
      <br></br>
      <br></br>
      <code>
        function totalWeight(n):
        <br></br>
        if n is less than or equal to 10: <br></br> return(5n<sup>2</sup> - 5n)
        <br></br>
        else:
        <br></br>
        return(100n - 550) //this includes the 450 grams of juveniles
      </code>
    </p>
    <h3>On day n, what is the average weight of the average frog?</h3>
    <p>
      In order to calculate the average weight of the frog community we will
      leverage our sum from the previous solution. The average is calculated by
      dividing the sum of all parts by its quantity, <i>n</i>
    </p>
    <p>
      Therefor we could produce a function like so: <br></br>
      <br></br>
      <code>
        function averageWeight(n):<br></br> let sum = totalWeight(n)
        <br></br> return(sum/n)
      </code>
    </p>
    <h3>
      How might we redesign the model to allow for new frogs to be born on a
      manually set schedule?
    </h3>
    <p>
      Since the rate at which the frogs were born, <i>r</i>, had a 1:1 ratio it
      was not incorporated into the original model. Let's first consider what we
      can safely assume:
    </p>
    <ul>
      <li>
        Once the threshold of 10 days of growth, the frog will not grow anymore
      </li>
      <li>
        If the birth rate of frogs is greater than or equal 10 days there will
        never be more than one juvenile at a time
      </li>
    </ul>
  </div>
);

export default CS;
