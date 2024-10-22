void main() {
  final String pokemon='ditto';
  final int hp =100;
  final bool isAlive =true;
  final List<String> abilities =['impostor'];
  final sprites =<String> ['ditto/front.png','hola caracola'];
//dynamic == null por defecto
dynamic errormesasge ='hola';
errormesasge=true;
errormesasge=[1,2,3,4,5,6];
errormesasge={1,2,3,4,5,6};
errormesasge=()=>true;
errormesasge=null; 

  print(""" 
  $pokemon
  $hp
  $isAlive
  $abilities
  $sprites
  $errormesasge


  """);

  

}