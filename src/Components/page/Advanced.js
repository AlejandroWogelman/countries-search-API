import React from "react";
import { useHistory } from "react-router-dom";

import "./Advanced.css";
export const Advanced = ({ advance }) => {
  const history = useHistory();

  return (
    <>
      {advance.length > 0 &&
        advance.map(
          ({
            nativeName,
            population,
            name,
            region,
            subregion,
            capital,
            flag,
            languages,
            currencies,
            topLevelDomain,
            borders,
          }) => {
            return (
              <div className="container-advance" key={name}>
                <div className="flag-advance">
                  {/*goBack regresa a la pagina anterior*/}
                  <button
                    onClick={() => history.replace("/")}
                    className="btn-back"
                  >
                    <i className="fas fa-arrow-left"></i> back
                  </button>

                  <img src={flag} alt={name} height="70%" width="100%" />
                </div>
                <div className="conten-advance">
                  <div className="box-borders">
                    <p>
                      Border countries:
                      {borders.length < 1 ? (
                        <span>no borders</span>
                      ) : (
                        borders.map((border) => {
                          return (
                            <span key={border} className="btn-border">
                              {border}
                            </span>
                          );
                        })
                      )}
                    </p>
                  </div>
                  <div className="advance-box1">
                    <h3>{name}</h3>
                    <p>
                      Native Name:<span> {nativeName}</span>
                    </p>
                    <p>
                      Capital: <span>{capital}</span>
                    </p>
                    <p>
                      Population:
                      <span> {Intl.NumberFormat().format(population)}</span>
                    </p>
                    <p>
                      Region: <span>{region}</span>
                    </p>
                    <p>
                      Sub Region: <span>{subregion}</span>
                    </p>
                  </div>
                  <div className="advance-box2">
                    <p>
                      Top Level Domain:
                      {topLevelDomain.length < 1 ? (
                        <span> no data</span>
                      ) : (
                        topLevelDomain.map((domain) => {
                          return <span key={domain}> {domain}</span>;
                        })
                      )}
                    </p>
                    <p>
                      Currencies:
                      {currencies.map((currencie) => {
                        return (
                          <span key={currencie.name}> {currencie.name},</span>
                        );
                      })}
                    </p>
                    <p>
                      Languages:
                      {languages.map((element) => {
                        return <span key={element.name}> {element.name},</span>;
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
    </>
  );
};
