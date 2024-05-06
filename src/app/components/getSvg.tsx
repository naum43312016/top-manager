import AdministrationSvg from "./administrationSvg";
import ComunicationSvg from "./comunicationSvg";
import DashboardSvg from "./dashboardSvg";
import { menuTitles } from "./menuTitles";
import ScoutSvg from "./scoutSvg";
import SettingsSvg from "./settingsSvg";
import TeamManagementSvg from "./teamManagementSvg";

export default function getSvg(props:{text: string,isHover: boolean}){
    const svg = {
        [menuTitles.DASHBOARD]: <DashboardSvg isHover={props.isHover} />,
        [menuTitles.TEAM_MANAGEMENT]: <TeamManagementSvg isHover={props.isHover}/>,
        [menuTitles.COMUNICATION]: <ComunicationSvg isHover={props.isHover}/>,
        [menuTitles.ADMINISTRATION]: <AdministrationSvg isHover={props.isHover}/>,
        [menuTitles.SCOUT]: <ScoutSvg isHover={props.isHover}/>,
        [menuTitles.SETTINGS]: <SettingsSvg isHover={props.isHover}/>,
    }

    return svg[props.text];
}