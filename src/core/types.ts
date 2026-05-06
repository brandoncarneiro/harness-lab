export type HarnessStage = {
  id: string;
  name: string;
  agent?: string;
  description?: string;
  inputs?: string[];
  outputs?: string[];
  approval?: 'none' | 'recommended' | 'required';
};

export type HarnessDefinition = {
  id: string;
  name: string;
  description: string;
  version: string;
  maturity: 'prompt' | 'local' | 'tool-integrated' | 'production';
  stages: HarnessStage[];
};

export type HarnessRun = {
  harnessId: string;
  harnessName: string;
  path: string;
  createdAt: string;
};
