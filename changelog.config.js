module.exports = {
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '',
      value: 'chore'
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '',
      value: 'docs'
    },
    feat: {
      description: 'A new feature',
      emoji: '',
      value: 'feat'
    },
    fix: {
      description: 'A bug fix',
      emoji: '',
      value: 'fix'
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '',
      value: 'refactor'
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '',
      value: 'style'
    },
    test: {
      description: 'Adding missing tests',
      emoji: '',
      value: 'test'
    }
  }
}
