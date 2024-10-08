import { fetchTeams } from '@/app/lib/data';
import Team from '@/app/ui/Team/index';

export default async function Page() {
  let team = await fetchTeams(1);
      
    return (
    <Team team={team}></Team>
    );
  }