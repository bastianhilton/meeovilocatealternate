module.exports = {
  "apps": [
    {
      "name": "meeovilocate",
      "cwd": "../alternatelocate",
      "args": ["runserver", "0.0.0.0:8087"], 
      "script": "manage.py",
      "exec_mode": "fork",
      "exec_interpreter": "python"
    },
    /*{
      "name": "graphqlmesh",
      "cwd": "../alternate-cms",
      "args": ["yarn", "mesh", "0.0.0.0:4003"],
      "script": "dev",
    }*/
  ]
}