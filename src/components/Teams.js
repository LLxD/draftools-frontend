import React from "react";
import Champion from "./Champion";
import { useDroppable } from "@dnd-kit/core";




function Teams({ blueTeam, redTeam }) {
  const { setNodeRef: setFirstDroppableRef } = useDroppable({
    id: blueTeam,
  });
  const { setNodeRef: setsecondDroppableRef } = useDroppable({
    id: redTeam,
  });

  return (
    <>
      {/* Start: Teams */}
      <div className="container-fluid" id="champion-select">
        <div className="row">
          <div className="col">
            <div className="row">
                <div style={{"minHeight":"300px"}} className="d-flex col justify-content-around blue-side mr-3 ml-3">
              <div ref={setFirstDroppableRef}>
                  {blueTeam.map((champion, index) => (
                    <Champion img={champion.thumbnailUrl} name={champion.name} role="Top" />
                  ))}
                </div>
              </div>

                <div className="d-flex col justify-content-around red-side mr-3">
              <div ref={setsecondDroppableRef}>
                  {redTeam.map((champion, index) => (
                    <Champion img={champion.thumbnailUrl} name={champion.name} role="Top" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Teams;
