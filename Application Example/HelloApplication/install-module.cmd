@ECHO OFF
SET moduleInstaller="%programfiles(x86)%/KDI/Poseidon/Poseidon.Module.Installer.exe"
SET manifest=HelloApplication.manifest.json
CALL %moduleInstaller% install %manifest%
PAUSE