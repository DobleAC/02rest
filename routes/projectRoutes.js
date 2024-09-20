const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');


router.get('/', (req, res)=> {
   const projects = projectController.getAllProjects();
   if(projects.length > 0){
    res.status(200).json(projects);
   }else{
    res.status(404).json({code:404, message:"Project not found"})
   }
});

router.get('/:id', (req, res)=> {
    const { id } = req.params;
    const project = projectController.getProjectById(id);
    console.log(project);
    if(project)
        res.status(200).json(project);
    else
        res.status(404).json({code: 404, message: 'Project not found'});
});

router.post('/', (req, res)=> {
    console.log(req.body);
    const { name, description, startDate, endDate, status, teamMembers, budget } = req.body;
    const newProject = projectController.createProject(name, description, startDate, endDate, status, teamMembers,budget);
    res.status(200).json(newProject);

});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const projectToUpdate = req.body;

    const projectUpdated = projectController.updateProject(projectToUpdate);

    if (!projectUpdated) {
        return res.status(404).json({ error: 'Project not found.' });
    }
    res.status(200).json(projectUpdated);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const projectDeleted = projectController.deleteProject(id);
    res.status(200).json(projectDeleted);
});

module.exports = router;