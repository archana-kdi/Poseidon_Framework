@ECHO OFF
SET moduleInstaller="%programfiles(x86)%/KDI/Poseidon/Poseidon.Module.Installer.exe"
SET moduleId=6cebe3af-27de-4304-9a66-7cfa105f278d
CALL %moduleInstaller% uninstall %moduleId%
PAUSE