//Projects.js
import React from 'react';
import './Projects.css'; // Import CSS file for styling

export default function Projects() {
    return (
        <section id="projects" className="project-container">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                Projects 
            </h2>
            <div className="project">
                <div className="project-image">
                    <a href="">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png" alt="Project 1" />
                    </a>
                </div>
                <div className="project-description">
                    <h2 className="project-title">
                        <a className="hover:underline" href="
						">DSA Progress Tracker</a>
                    </h2>
                    <p>
                        This is a project built on react which tracks your progess in dsa and stores that in the local storage.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-image">
                    <a href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png" alt="Project 2" />
                    </a>
                </div>
                <div className="project-description">
                    <h2 className="project-title">
                        <a className="hover:underline" href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">15 Puzzle Game</a>
                    </h2>
                    <p>
                        15 puzzle game is basically a tile-based game in which there are 16 tiles out of which 1 tile is left empty and the remaining tiles are filled with numbers from 1 to 15 in random order. The user has to arrange all the tiles in numerical order with the rule that they can only move the tile that is a direct neighbor of the empty tile.
                    </p>
                </div>
            </div>
        </section>
    );
}
