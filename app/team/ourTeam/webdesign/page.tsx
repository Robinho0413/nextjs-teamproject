import Team from '@/app/ui/Team/index';

export default function Page() {
  let team = {
        "title": "Equipe Webdesign",
        "heading": "Donner corps aux rêves que vous n'avez même pas !",
        "description":
          "Vous ne savez pas ce que vous voulez ? Aucun souci, notre équipe peut le concevoir !",
        "employees": [
          {
            "id": 1,
            "image": "https://i.pravatar.cc/505",
            "title": "Georges Abitbol",
            "subtitle": "Responsable de la classe internationale"
          },
          {
            "id": 2,
            "image": "https://i.pravatar.cc/501",
            "title": "Ingvar Kamprad ",
            "subtitle": "Responsable UX/UI"
          },
          {
            "id": 3,
            "image": "https://i.pravatar.cc/509",
            "title": "Jean Petites-mains",
            "subtitle": "Esclave"
          }
        ]
      }
      
    return (
    <Team team={team}></Team>
    );
  }