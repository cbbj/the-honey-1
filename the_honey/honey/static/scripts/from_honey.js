document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("compliment").onclick = compliment;
  function compliment(){
    let complimentGen = jsonContent["featured"][Math.floor(Math.random()*jsonContent["featured"].length)]["title"];
    randomCompliment = complimentGen;
    document.querySelector('h1').innerHTML = `The Honey says ${randomCompliment}`;
  }
  var jsonContent= {
            "featured": [
              {
                "id": "111",
                "title": "post title 111",
                "desc": "This is a test desc 111"
              },
              {
                "id": "222",
                "title": "post title 222",
                "desc": "This is a test desc 222"
              },
              {
                "id": "333",
                "title": "post title 333",
                "desc": "This is a test desc 333"
              }
      ]
  };
});
