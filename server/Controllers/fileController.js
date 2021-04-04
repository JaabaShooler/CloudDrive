const FileService = require('../Services/FileService')
const User = require('../Models/User')
const File = require('../Models/File')

class FileController{
    async createDir(req, res){
        try{
            const {name, type, parent} = req.body;
            const file = new File({name, type, parent, user: req.user.id});
            const parentFile = await File.findOne({_id: parent})
            if(!parentFile){
                file.path = name;
                await FileService.createDir(file);
            }else{
                file.path = `${parentFile.path}\\${file.name}`
                await  FileService.createDir(file)
                parentFile.childs.push(file._id)
                await  parentFile.save()
            }

            await file.save();
            return res.status(200).json(file);
        }catch (e) {
            console.log(e);
            return res.status(400).json(e)
        }
    }

    async fetchFiles(req, res){
        try{
            const files = await  File.find({user: req.user.id, parent: req.query.parent})
            return res.json(files)
        }catch (e) {
            console.log(e);
            return res.status(400).json(e)
        }
    }
}

module.exports = new FileController()