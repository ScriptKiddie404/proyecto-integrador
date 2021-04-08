import React from 'react';

const Stats = () => {

    return (
        <section className="stats">
            <div className="container">
                <h3 className="stats-heading text-center my-1">
                    <div className="helper-container">
                        A new way of taking care of what matters to you. Thermal Care cares about your greenhouse as
                        much as you do.
                    </div>
                </h3>

                <div className="grid grid-3 text-center my-4">
                    <div className={"stats-item"}>
                        <i className="fas fa-thermometer-three-quarters fa-3x"/>
                        <h3>6820</h3>
                        <p className="text-secondary">
                            Installed Systems
                        </p>
                    </div>

                    <div className={"stats-item"}>
                        <i className="fas fa-tree fa-3x"/>
                        <h3>892,457</h3>
                        <p className="text-secondary">
                            Protected Trees
                        </p>
                    </div>

                    <div className={"stats-item"}>
                        <i className="fas fa-hand-holding-water fa-3x"/>
                        <h3>5,456,989</h3>
                        <p className="text-secondary">
                            m<sup>3</sup> of water saved
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Stats;
