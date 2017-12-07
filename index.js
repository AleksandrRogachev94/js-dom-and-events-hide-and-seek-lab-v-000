function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}


function deepestChild(){
  let node = document.getElementById("grand-node")
  let nextNode = node.children[0]
  while(nextNode){
    node = nextNode;
    nextNode = node.children[0]
  }
  return node;
}

function increaseRankBy(n){
  let rankedLists = querySelectorAll(".ranked-list")
  for (let 1 = 0, i < ranked-list.length, i++){
    let children = rankedLists[i].children
    for(let a = 0, a < children.lenght, a++){
      children[a].innerHTML = parseInt(children[a].innerHTML) + n;
    }
  }
}