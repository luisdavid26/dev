void main() {
  final Map<String,dynamic> pokemon = {
    'name': 'ditto',
    'hp': 100,
    'isAlive': true,
    'abilities': <String>['impostor'],
    'sprites': {1: 'ditto/front', 2: 'ditto/back'}
  };
  print(pokemon);
  print('name: ${pokemon['name']}');
  print('name: ${pokemon['sprites']}');
  print('back: ${pokemon['sprites'][2] }');
  print('front: ${pokemon['sprites'][1]  }');
}
