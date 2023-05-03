import IssueExploitabilitLevel from "./IssueLevel/IssueExploitAbilityLevel";
import IssueImpactLevell from "./IssueLevel/IssueImpactLevel";
import IssuePrevelanceLevel from "./IssueLevel/IssuePrevelanceLevel";
import "./TestButton.css"

const TestButton = (props) => {

    let PrevalenceLevelText = "";
    let ExploitAbilityLevelText = "";
    let ImpactLevelText = "";

    if (props.PrevalenceLevel == 1) {
        PrevalenceLevelText = " RARE";
    } else if (props.PrevalenceLevel == 2) {
        PrevalenceLevelText = " OCCASIONAL";
    } else {
        PrevalenceLevelText = " COMMON";
    }

    if (props.ExploitAbilityLevel == 1) {
        ExploitAbilityLevelText = " DIFFICULT";
    } else if (props.ExploitAbilityLevel == 2) {
        ExploitAbilityLevelText = " MODERATE";
    } else {
        ExploitAbilityLevelText = " EASY";
    }

    if (props.ImpactLevel == 1) {
        ImpactLevelText = " WORRYING";
    } else if (props.ImpactLevel == 2) {
        ImpactLevelText = " HARMFUL";
    } else {
        ImpactLevelText = " DEVASTATING";
    }

    return (
        <>
            <div className="TestButton">
                <h2>PREVALENCE {PrevalenceLevelText}</h2>
                <div className="LevelIcon">
                    <IssuePrevelanceLevel quantity={props.PrevalenceLevel} />
                </div>
                
            </div>
            <div className="TestButton">
                <h2>EXPLOITABILITY {ExploitAbilityLevelText}</h2>
                <div className="LevelIcon">
                    <IssueExploitabilitLevel quantity={props.ExploitAbilityLevel} />
                </div>
            </div>
            <div className="TestButton">
                <h2>IMPACT {ImpactLevelText}</h2>
                <div className="LevelIcon">
                    <IssueImpactLevell quantity={props.ImpactLevel} />
                </div>
            </div>
        </>
    );

    
}

export default TestButton;