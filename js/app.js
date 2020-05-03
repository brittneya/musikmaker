(function() {

  const membrane = new Tone.MembraneSynth().toMaster();
  const duo = new Tone.DuoSynth().toMaster();
  const am = new Tone.AMSynth().toMaster();
  const fm = new Tone.FMSynth().toMaster();
  const poly = new Tone.PolySynth().toMaster();
  const pluck = new Tone.PluckSynth().toMaster();
  const mono = new Tone.MonoSynth().toMaster();


  function playDuo() {
    duo.triggerAttackRelease("C2", "8n");
  }

function playMembrane() {
    membrane.triggerAttackRelease("C2", "8n");
  }
   function playAM() {
    am.triggerAttackRelease("C2", "8n");
  }

function playFM() {
    fm.triggerAttackRelease("C2", "8n");
  }
  
   function playMono() {
  mono.triggerAttackRelease("C2", "8n");
  }

function playPluck() {
    pluck.triggerAttackRelease("C2", "8n");
  } 
 
   
    document.getElementById("mem").addEventListener("click", function() {
    playMembrane();
  });
     
   
    document.getElementById("duo").addEventListener("click", function() {
    playDuo();
})
   
    document.getElementById("fm").addEventListener("click", function() {
    playFM();
})

    document.getElementById("am").addEventListener("click", function() {
    playAM();

   
    document.getElementById("mono").addEventListener("click", function() {
    playMono();
})   
   
    document.getElementById("pluck").addEventListener("click", function() {
    playPluck();
})

})  
  }());