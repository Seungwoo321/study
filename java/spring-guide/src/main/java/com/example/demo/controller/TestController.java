package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.TestResultModel;
import com.example.demo.service.TestService;

@RestController
public class TestController {

	@Autowired
	private TestService testService;
	
	@RequestMapping(value = "/test")
	public List<TestResultModel> test() {
		return testService.executeAthenaQuery();
	}
}
