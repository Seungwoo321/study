package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.TestResultModel;
import com.example.demo.repository.TestRepository;

@Service
public class TestService {

	@Autowired
	private TestRepository testRepository;
	
	public List<TestResultModel> executeAthenaQuery() {
		return testRepository.executeAthenaQuery();
	}
}
