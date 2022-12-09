import React, { Component } from "react";
import { Button } from "react-bootstrap";




export default class Game extends Component {




  render() {
    return (
      <div>
        <Button className="runBtn">Run</Button>

        <div className="img__wrapper">
          <img
            className="img"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c0118ac-577e-4aa2-91ff-ea1484ba12d6/d73gq1c-f8b14123-36d7-46e7-b237-6fb5949c27c1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjMDExOGFjLTU3N2UtNGFhMi05MWZmLWVhMTQ4NGJhMTJkNlwvZDczZ3ExYy1mOGIxNDEyMy0zNmQ3LTQ2ZTctYjIzNy02ZmI1OTQ5YzI3YzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2GvibaLe-qRgKRf8b0BOOZIjnZtG6OCNUofrVV9HxGM"
            alt=""
          />
        </div>
      </div>
    );
  }
}
