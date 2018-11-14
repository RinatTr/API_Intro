document.addEventListener("DOMContentLoaded", () => {
  let APIResponse = {
    "status": "success",
    "message": {
      "affenpinscher": [],
      "african": [],
      "airedale": [],
      "akita": [],
      "appenzeller": [],
      "basenji": [],
      "beagle": [],
      "bluetick": [],
      "borzoi": [],
      "bouvier": [],
      "boxer": [],
      "brabancon": [],
      "briard": [],
      "bulldog": ["boston", "french"],
      "bullterrier": ["staffordshire"],
      "cairn": [],
      "cattledog": ["australian"],
      "chihuahua": [],
      "chow": [],
      "clumber": [],
      "cockapoo": [],
      "collie": ["border"],
      "coonhound": [],
      "corgi": ["cardigan"],
      "cotondetulear": [],
      "dachshund": [],
      "dalmatian": [],
      "dane": ["great"],
      "deerhound": ["scottish"],
      "dhole": [],
      "dingo": [],
      "doberman": [],
      "elkhound": ["norwegian"],
      "entlebucher": [],
      "eskimo": [],
      "frise": ["bichon"],
      "germanshepherd": [],
      "greyhound": ["italian"],
      "groenendael": [],
      "hound": ["afghan", "basset", "blood", "english", "ibizan", "walker"],
      "husky": [],
      "keeshond": [],
      "kelpie": [],
      "komondor": [],
      "kuvasz": [],
      "labrador": [],
      "leonberg": [],
      "lhasa": [],
      "malamute": [],
      "malinois": [],
      "maltese": [],
      "mastiff": ["bull", "tibetan"],
      "mexicanhairless": [],
      "mix": [],
      "mountain": ["bernese", "swiss"],
      "newfoundland": [],
      "otterhound": [],
      "papillon": [],
      "pekinese": [],
      "pembroke": [],
      "pinscher": ["miniature"],
      "pointer": ["german", "germanlonghair"],
      "pomeranian": [],
      "poodle": ["miniature", "standard", "toy"],
      "pug": [],
      "puggle": [],
      "pyrenees": [],
      "redbone": [],
      "retriever": ["chesapeake", "curly", "flatcoated", "golden"],
      "ridgeback": ["rhodesian"],
      "rottweiler": [],
      "saluki": [],
      "samoyed": [],
      "schipperke": [],
      "schnauzer": ["giant", "miniature"],
      "setter": ["english", "gordon", "irish"],
      "sheepdog": ["english", "shetland"],
      "shiba": [],
      "shihtzu": [],
      "spaniel": ["blenheim", "brittany", "cocker", "irish", "japanese", "sussex", "welsh"],
      "springer": ["english"],
      "stbernard": [],
      "terrier": ["american", "australian", "bedlington", "border", "dandie", "fox", "irish", "kerryblue", "lakeland", "norfolk", "norwich", "patterdale", "russell", "scottish", "sealyham", "silky", "tibetan", "toy", "westhighland", "wheaten", "yorkshire"],
      "vizsla": [],
      "weimaraner": [],
      "whippet": [],
      "wolfhound": ["irish"]
    }
  }

  let breedList = [];
  let breedsObj = APIResponse.message;

  const firstUpcase = (string) => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

  for (breed in breedsObj) {
    if (breedsObj[breed].length > 0) {
      breedsObj[breed].forEach(subBreed => {
        breedList.push(`${firstUpcase(subBreed)} ${firstUpcase(breed)}`);
      });
    } else {
      breedList.push(`${firstUpcase(breed)}`);
    }
  }

  let button = document.querySelector(".getDog");
  button.addEventListener('click', () => {
    let answerSpace = document.querySelector(".breedName");
    let randomNumBreed = Math.floor(Math.random()*breedList.length); //generates a new randomNum after each click!
    answerSpace.innerText = breedList[randomNumBreed];
    if (button.innerText!=="Another One!") {
      button.innerText = "Another One!"
    }
  })

  let firstNames = ["Johnny","Flex","J","BigO","lil","Shady","Wicked","Cousin","Dr.","RED","Papa","Mama"];
  let lastNames = ["Beatz","Stack","Fruitcake","Suga","Puff","Pup","Static","Wax-king",".pop()"];

  const randomNum = function(arr) {
    return Math.floor(Math.random()*arr.length);
  }

  let button2 = document.querySelector(".getRap");
  button2.addEventListener('click', () => {
    let answerSpace = document.querySelector(".rapperName");
    let name = `${firstNames[randomNum(firstNames)]} ${lastNames[randomNum(lastNames)]}`
    answerSpace.innerText = name;
    if (button.innerText!=="Another One!") {
      button.innerText = "Another One!"
    }
  })


})
