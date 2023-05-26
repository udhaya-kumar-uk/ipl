import React from 'react';
import Textfield from '../Textfield/Textfield.js';
import { Teamplaying } from '../Mock/Mocks.js';
import Checks from '../Textfield/Checks/Checks.js';


export default function Modal({ 
  handlechange = (e) => {}, 
  handlesubmit=(e) =>{},
  data={},
  
  
}) {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD PLAYERS
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                PLAYER NAME
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Textfield
                label="PLAYERNAME"
                id="PLAYERNAME"
                type="text"
                placeholder="Virat Kholi"
                onChange={handlechange}
                value={data["PLAYERNAME"]}
              />
               <Textfield
                label="COUNTRYNAME"
                id="COUNTRYNAME"
                type="text"
                placeholder="i,e india,england"
                onChange={handlechange}
                value={data["COUNTRYNAME"]}
              />
              <div className="row mb-3">
                <div className="col-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    TEAM PLAYING
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={handlechange}
                    id="PLAYERTEAM"
                  >
                    <option selected>SELECT TEAM</option>
                    {Teamplaying.map((team, index) => (
                      <option
                        key={`add-palyer-moda-select-${index}`}
                        value={team}
                      >
                        {team}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                <Textfield
                label="JERSEYNUMBER"
                id="JERSEYNUMBER"
                type="number"
                placeholder="i,e 18,7,3"
                onChange={handlechange}
                value={data["JERSEYNUMBER"]}
              />
                </div>
              </div>
              <div className="row P-2 mb-2">
                <h1 className="p-0 mb-2">PLAYER SKILLS</h1>
                <Checks 
                   onChange={handlechange}  
                   label="BATSMAN" 
                   id="BATSMAN"
                   checked={data["SKILLS"].indexOf("BATSMAN") > -1 ? true : false} />
                <Checks 
                   onChange={handlechange} 
                   label="BOWLER" 
                   id="BOWLER"
                   checked={data["SKILLS"].indexOf("BOWLER") > -1 ? true : false}
                      />
                <Checks
                  onChange={handlechange}
                  label="ALL ROUNDER"
                  id="ALLROUNDER"
                  checked={data["SKILLS"].indexOf("ALL ROUNDER") > -1 ? true : false}
                />
                <Checks
                  onChange={handlechange}
                  label="WICKET KEEPER"
                  id="WICKETKEEPER"
                  checked={data["SKILLS"].indexOf("WICKETKEEPER") > -1 ? true : false}
                />
              </div>
              <Textfield
                label="ACTIONAMOUNT"
                id="ACTIONAMOUNT"
                type="number"
                placeholder="Enter Amount In Crorce"
                onChange={handlechange}
                value={data["ACTIONAMOUNT"]}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary "
               onClick={ handlesubmit}
               
              >
                ADD PLAYER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
