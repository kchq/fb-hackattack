fb-hackattack
=============

## Installation instructions:

Assuming you have access to a unix command line (true for mac and linux)

#### install node.js from [here](nodejs.org)
You should use their installer if possible. If not you'll probably be installing from the .tar.gz, in which case installation instructions are as follows:
  untar the file 'tar -xzf node-version-number-###'
  'cd node-v10-...'
  './configure'
  make
  sudo make install

At this point 'which node' should return some file path

#### get our code
clone this repo to some known location

#### launch the index file on localhost
in your terminal navigate to the repository you just created. Run 'node web.js'. You should see output ending with "Listening on 5000"

#### Open in your browser
in your favorite browser navigate to localhost:5000


## Development Strategy

update web.js and other files maybe..
You will need to relaunch with the 'node web.js' command every time you make an edit.

Pushing to production will be done by Kevin, so ask him about that. If you want to be able to push to prod yourself you'll need to install huroku. I failed after ~30 mins. Kevin succeeded on a mac after ~10 mins. More info can be found [here](https://devcenter.heroku.com/articles/facebook)
