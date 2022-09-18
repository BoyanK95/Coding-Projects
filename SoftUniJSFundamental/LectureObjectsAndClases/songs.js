function solve(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let n = input.shift();
  let typeOfList = input.pop();

  for (let i = 0; i < input.length; i++) {
    let songInfo = input[i].split("_");
    let [typeList, name, time] = songInfo;

    let song = new Song(typeList, name, time);
    songs.push(song);
  }

  if (typeOfList === 'all') {
    songs.forEach(element => {
        console.log(element.name);
    });
  }else{
    for (let j = 0; j < songs.length; j++) {
        let typeOfSong = songs[j].typeList;
        if (typeOfList === typeOfSong) {
            console.log(songs[j].name);
        }
        
    }
  }
}

// solve([
//   3,

//   "favourite_DownTown_3:14",

//   "favourite_Kiss_4:16",

//   "favourite_Smooth Criminal_4:01",

//   "favourite",
// ]);

solve([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])

